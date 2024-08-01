import os

x = os.listdir()

for file in x:
    if "wav" in file:
        os.system('clear')
        print(f"Processing {file}")
        filename = file.split(".")[0]
        os.system(f'ffmpeg -i "{file}" "{filename}.mp3"')
        