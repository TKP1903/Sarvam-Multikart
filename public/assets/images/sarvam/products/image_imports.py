# Description: This is a cli tool to make js objects for image imports
from Files import *
import sys
import json
import os
import mimetypes
mimetypes.init()

# custom imports

# global vars
ASSETS_PATH = '/assets/images/sarvam/products'


def get_extensions_for_type(general_type):
    general_type = general_type.lower()
    extensions = []
    for ext in mimetypes.types_map:
        if mimetypes.types_map[ext].split('/')[0] == general_type:
            extensions.append(ext)
    return extensions


def getParentName():
    parentPath = os.path.abspath(os.path.join(os.getcwd(), os.pardir))
    return os.path.basename(parentPath)


def files_in_dir(dir, type='image'):
    currDir = os.getcwd()
    path = currDir + '\\' + dir
    files = []
    allowed_extensions = get_extensions_for_type(type)
    for file in os.listdir(path):
        # is file and is of allowed type
        if (
            os.path.isfile(os.path.join(path, file)) and
            os.path.splitext(file)[1] in allowed_extensions
        ):
            files.append(file)
    return files


def getImages(parentDir, startingId):
    id = startingId
    imgs = []
    if (parentDir.find('.') != -1):
        return []
    files = files_in_dir(parentDir)
    for file in files:
        file_name = file.split(".")[0]
        imgs.append({
            "id": id,
            "title": file_name,
            "description": file_name,
            "price": 0,
            "img": ASSETS_PATH+'/'+parentDir+'/'+file,
            "category": parentDir,
        })
        id += 1
    return imgs


def json_of_images(path, startingId):
    imgs = []
    dirs = os.listdir(path)
    id = int(startingId)
    for parentDir in dirs:
        _imgs = getImages(parentDir, id)
        imgs += _imgs
        id += len(_imgs)
    return imgs


def main():
    # get the path to the images
    path = os.getcwd()
    global START_DIR
    START_DIR = path
    startingId = sys.argv[1]

    images = json_of_images(path, startingId)
    # # add to file
    # with open('images.json', 'w') as f:
    #     f.write(images)

    # make a JSONFile object and update the data with the images data
    imagesFile = JSONFile('images.json')
    imagesFile.make_pretty(indent=2)
    imagesFile.update({
        "images": images
    })


# this is a cli tool to make js objects for images
if __name__ == "__main__":
    main()
