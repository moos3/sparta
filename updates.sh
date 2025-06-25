#!/bin/sh

echo "Compile Protoburf"
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative proto/service.proto
protoc --js_out=import_style=commonjs:web/src/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:web/src/ proto/service.proto
#echo "Building plugins"
#cd plugins
#for i in `ls *.go`; do
#    echo "Building $i"
#    rm -f ${i%.go}.so
#    go build -buildmode=plugin -o ${i%.go}.so $i
#done

