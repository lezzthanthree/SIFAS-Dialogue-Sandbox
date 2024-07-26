import json
import simplejson
import os


with open('characters.json') as f:
    json = json.load(f)

    for char in json.keys():
        files = os.listdir(f'./{char}')
        ids = [x.split('_')[0] for x in files]
        print(ids)
        json[char]["back"] = ids

    print(json)

with open(f"characters_new.json", "w") as datafile:
    datafile.write(
        simplejson.dumps(json, indent=4)
    )


