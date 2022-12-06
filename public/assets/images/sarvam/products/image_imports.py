import sys
import json
import os


def files_in_dir(dir):
    currDir = os.getcwd()
    path = currDir + '\\' + dir
    files = []
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            files.append(file)
    return files


def json_of_images(path, startingId):
    ans = []
    id = int(startingId)
    dirs = os.listdir(path)
    for parentDir in dirs:
        if (parentDir.find('.') != -1):
            continue
        files = files_in_dir(parentDir)
        for file in files:
            file_name = file.split(".")[0]
            ans.append({
                "id": id,
                "title": file_name,
                "description": file_name,
                "price": 0,
                "img": parentDir+'/'+file,
                "category": parentDir,
            })

            id += 1
    return json.dumps(ans, indent=2)


def main():
    # get the path to the images
    path = os.getcwd()
    global START_DIR
    START_DIR = path
    startingId = sys.argv[1]

    images = json_of_images(path, startingId)
    # add to file
    with open('images.json', 'x') as f:
        f.write(images)


# this is a cli tool to make js objects for images
if __name__ == "__main__":
    main()
