# Run SCope with Envoy

1. Compile the protobuf interface
```
bash compile_proto.sh
```

2. Build and run the Envoy Singularity image

Please visit this [link](https://github.com/aertslab/SCope/tree/master/vendor/envoy)

3. Start the SCope Data Server
```
cd opt/scopeserver/dataserver
python __init__.py --dev_env
```

4. Start SCope Client
```
npm run dev
```

5. Visit http://0.0.0.0:8081 to access SCope.