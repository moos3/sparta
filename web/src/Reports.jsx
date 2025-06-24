import React, { useState, useEffect } from 'react';
import * as proto from './service_grpc_web_pb';
import * as protoService from './service_pb';

const client = new proto.service.ReportServiceClient('http://localhost:8080', null, null);

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [domain, setDomain] = useState('');
    const [reportId, setReportId] = useState('');
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        const request = new protoService.service.ListReportsRequest();
        client.listReports(request, {}, (err, response) => {
            if (err) {
                console.error('Error fetching reports:', err);
                return;
            }
            setReports(response.getReportsList());
        });
    }, []);

    const handleGenerateReport = () => {
        const request = new protoService.service.GenerateReportRequest();
        request.setDomain(domain);
        client.generateReport(request, {}, (err, response) => {
            if (err) {
                console.error('Error generating report:', err);
                return;
            }
            setReports([...reports, response]);
            setDomain('');
        });
    };

    const handleGetReportById = () => {
        const request = new protoService.service.GetReportByIdRequest();
        request.setReportId(reportId);
        client.getReportById(request, {}, (err, response) => {
            if (err) {
                console.error('Error fetching report by ID:', err);
                return;
            }
            setSelectedReport(response.getReport());
            setReportId('');
        });
    };

    return (
        <div>
            <h1>Domain Security Reports</h1>
            <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter domain"
            />
            <button onClick={handleGenerateReport}>Generate Report</button>
            <input
                type="text"
                value={reportId}
                onChange={(e) => setReportId(e.target.value)}
                placeholder="Enter report ID"
            />
            <button onClick={handleGetReportById}>Get Report by ID</button>
            <button onClick={() => {
                const request = new protoService.service.ListReportsRequest();
                client.listReports(request, {}, (err, response) => {
                    if (err) {
                        console.error('Error fetching reports:', err);
                        return;
                    }
                    setReports(response.getReportsList());
                });
            }}>Refresh Reports</button>
            {selectedReport && (
                <div>
                    <h2>Selected Report</h2>
                    <p>ID: {selectedReport.getReportId()}</p>
                    <p>Domain: {selectedReport.getDomain()}</p>
                    <p>Score: {selectedReport.getScore()}</p>
                    <p>Risk Tier: {selectedReport.getRiskTier()}</p>
                    <p>Created At: {selectedReport.getCreatedAt().toDate().toString()}</p>
                </div>
            )}
            <ul>
                {reports.map((report) => (
                    <li key={report.getReportId()}>
                        {report.getDomain()} - Score: {report.getScore()} - Risk: {report.getRiskTier()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;