import os 
import shutil

parent_dir = "./"

def go(path: str):
    x = os.listdir(path=path)
    if "sprite.json" in x:
        shutil.copy(f"{path}/sprite.json", f"./{path.replace("/", "-")}_sprite.json")
        return

    for filename in x:
        if filename == os.path.basename(__file__):
            continue

        # print(filename)
        if os.path.isdir(f"{path}/{filename}"):
            print(f"{path}/{filename}")
            go(f"{path}/{filename}")
            continue

go(parent_dir)
