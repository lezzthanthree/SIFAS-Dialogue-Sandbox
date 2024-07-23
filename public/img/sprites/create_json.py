import os 
import json
import simplejson
import shutil

parent_dir = "./"

x = os.listdir()
jsons = []

for i in x:
    if '.--' in i:
        jsons.append(i)

print(jsons)

final = {}

for file in jsons:
    with open(file) as f:
        j = json.load(f)
        name = file.replace('.--', '').replace('_sprite.json', '')
        print(name)
        final[name] = j

print(final)

with open(f"characters.json", "w") as datafile:
    datafile.write(
        simplejson.dumps(final, indent=4)
    )


