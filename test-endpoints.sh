#!/bin/sh

API_KEY="550e8400-e29b-41d4-a716-446655440000"
DOMAIN="insurtech.dev" # Define the domain once for consistency

echo "Running GRPC curl test"
echo "-----------------------------"

echo "Testing ListUsers"
grpcurl -plaintext -H "x-api-key: ${API_KEY}" localhost:50051 service.UserService/ListUser

echo "-----------------------------"
echo "Testing ScanDomain (and capturing scanId)"

# Execute ScanDomain and capture its entire output
SCAN_DOMAIN_OUTPUT=$(grpcurl -plaintext -H "x-api-key: ${API_KEY}" -d "{\"domain\": \"${DOMAIN}\"}" localhost:50051 service.UserService/ScanDomain)

# Check if jq is installed, which is necessary to parse the JSON output
if ! command -v jq &> /dev/null
then
    echo "Error: 'jq' is not installed. Please install 'jq' to parse JSON output and extract the scanId."
    echo "  For Debian/Ubuntu: sudo apt-get install jq"
    echo "  For macOS: brew install jq"
    exit 1
fi

# Extract the scanId using jq. We assume the output is a JSON object with a 'scanId' field.
DNS_SCAN_ID=$(echo "${SCAN_DOMAIN_OUTPUT}" | jq -r '.scanId')

# Check if scanId was successfully captured
if [ -z "${DNS_SCAN_ID}" ]; then
    echo "Warning: Failed to capture dns_scan_id from ScanDomain output."
    echo "ScanDomain output was: ${SCAN_DOMAIN_OUTPUT}"
    echo "Subsequent calls requiring dns_scan_id might fail or run without it."
    # You might want to exit here if dns_scan_id is critical for subsequent operations
    # exit 1
else
    echo "Successfully captured dns_scan_id: ${DNS_SCAN_ID}"
fi

echo "-----------------------------"
echo "Proceeding with other scans, passing dns_scan_id..."

echo "Testing ScanTLS"
grpcurl -plaintext -H "x-api-key: ${API_KEY}" -d "{\"domain\": \"${DOMAIN}\", \"dns_scan_id\": \"${DNS_SCAN_ID}\"}" localhost:50051 service.UserService/ScanTLS

echo "Testing ScanCrtSh"
grpcurl -plaintext -H "x-api-key: ${API_KEY}" -d "{\"domain\": \"${DOMAIN}\", \"dns_scan_id\": \"${DNS_SCAN_ID}\"}" localhost:50051 service.UserService/ScanCrtSh

# Corrected typo: 'ehco' to 'echo'
echo "Testing ScanChaos"
grpcurl -plaintext -H "x-api-key: ${API_KEY}" -d "{\"domain\": \"${DOMAIN}\", \"dns_scan_id\": \"${DNS_SCAN_ID}\"}" localhost:50051 service.UserService/ScanChaos

# Corrected typo: 'ehco' to 'echo'
echo "Testing ScanShodan"
grpcurl -plaintext -H "x-api-key: ${API_KEY}" -d "{\"domain\": \"${DOMAIN}\", \"dns_scan_id\": \"${DNS_SCAN_ID}\"}" localhost:50051 service.UserService/ScanShodan

echo "Testing ScanOTX"
grpcurl -plaintext -H "x-api-key: ${API_KEY}" -d "{\"domain\": \"${DOMAIN}\", \"dns_scan_id\": \"${DNS_SCAN_ID}\"}" localhost:50051 service.UserService/ScanOTX

echo "Testing ScanWhois"
grpcurl -plaintext -H "x-api-key: ${API_KEY}" -d "{\"domain\": \"${DOMAIN}\", \"dns_scan_id\": \"${DNS_SCAN_ID}\"}" localhost:50051 service.UserService/ScanWhois

echo "-----------------------------"
echo "GRPC curl tests finished."