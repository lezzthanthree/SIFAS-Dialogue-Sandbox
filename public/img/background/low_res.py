import os

x = os.listdir()

for file in x:
    if "jpg" in file or "png" in file:
        os.system("clear")
        print(f"Processing {file}")
        os.system(f"ffmpeg -n -i {file} -vf scale=500:-1 ../background_low/{file}")