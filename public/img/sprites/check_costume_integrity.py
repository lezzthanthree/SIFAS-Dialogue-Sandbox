import os 
import json
import simplejson

parent_dir = "./"

with open('characters.json') as f:
    json = json.load(f)
    
    characters = json.keys()

    for char in characters:
        print(char)
        current_data = json[char]
        files = os.listdir(f'./{char}')


        for file in files:
            split = file.split("_")
            if not split[0] in current_data['costumes'] and split[0] != "sprite.json":
                print(f'{file} is not in json!')
    