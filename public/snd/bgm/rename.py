import os

x = os.listdir()

for file in x:
    if "awb" in file:
        filename = file.split('.')[0]

        os.rename(f'./{file}', f"./{filename}.wav")