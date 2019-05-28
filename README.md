# ZIP CODE MICROSERVICE - Simple Microservice that ingests another API 

- takes 2 zipcodes and calculates difference between

- uses a config file to use the zip url and key.  need to sign up for a key:

[https://www.zipcodeapi.com/Register>]

- Format is [https://www.zipcodeapi.com/rest/<api_key>/distance.<format>/<zip_code1>/<zip_code2>/<units>]

- Format here is [localhost:3000/distance/<zip1>/<zip2>]

- Sample: [http://localhost:3000/distance/30044/90210] replies:
{"distance":1957.905}