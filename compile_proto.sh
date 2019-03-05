# 1. Compile Protobuff interface for back-end
BE_SERVER_DIR="opt/scopeserver/dataserver/modules/gserver"
python -m grpc.tools.protoc  \
   --python_out=${BE_SERVER_DIR} \
   --grpc_python_out=${BE_SERVER_DIR} \
   --proto_path=src/proto/ s.proto
A="import s_pb2 as s__pb2"
B="from scopeserver.dataserver.modules.gserver import s_pb2 as s__pb2"
# Update the import
sed -i -e "s#$A#$B#g" "${BE_SERVER_DIR}/s_pb2_grpc.py"

# 2. Compile Protobuff interface for front-end
FE_SERVER_DIR="bin"
protoc -I=src/proto/ s.proto \
   --js_out=import_style=commonjs:${FE_SERVER_DIR} \
   --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${FE_SERVER_DIR}
