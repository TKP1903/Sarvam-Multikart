import sys
import os
import json
import mimetypes
from Files import *
mimetypes.init()

ASSETS_PATH = '/assets/images/sarvam/products/feet-protection'
DIR_INIT = ''
CATEGORY = ''


def get_extensions_for_type(general_type):
    '''
    * Function to get all extensions for a general type
    * : general_type: string
    * : return: string[]
    * example: get_extensions_for_type('image') will return
     ['.bmp', '.dib', '.gif', '.jfif', '.jpe', '.jpeg', '.jpg', '.pbm', '.pgm', '.png', '.ppm', '.ras', '.tiff', '.tif', '.xbm', '.xpm']
    '''
    general_type = general_type.lower()
    extensions = []
    for ext in mimetypes.types_map:
        if mimetypes.types_map[ext].split('/')[0] == general_type:
            extensions.append(ext)
    return extensions


def getParentName(path):
    """
    * get name of parent directory for the given path
    * : path {string}
    * : return {string}
    """
    parentPath = os.path.abspath(os.path.join(path, os.pardir))
    return os.path.basename(parentPath)


def files_in_dir(dir, type='image', ext=['.webp']):
    """
    * get all files in a sub-directory of cwd
    * : dir {string}
    * : type: {string}
    * : ext: {string[]}
    * : return: {string[]}
    """
    currDir = os.getcwd()
    path = currDir + '\\' + dir
    files = []
    allowed_extensions = ext if ext != None else get_extensions_for_type(type)

    # list of files in the directory with extension
    listDir = os.listdir(path)

    for file in listDir:
        file_ext = os.path.splitext(file)[1]
        if (
            not (os.path.isfile(os.path.join(path, file))) or
            not (file_ext in allowed_extensions)
        ):
            continue
        files.append(file)
    return files


def json_of_shoes(path, startingId):
    shoes = []
    id = int(startingId)

    def addImagesInDir(parentDir, id):
        imgs = []
        files = files_in_dir(parentDir)
        for file in files:
            file_name = file.split(".")[0]
            imgs.append({
                "id": id,
                "title": file_name,
                "description": file_name,
                "price": 0,
                "img": ASSETS_PATH+'/'+parentDir+'/'+file,
                "category": CATEGORY,
            })
            id += 1
        return imgs

    brand_names = os.listdir(path)

    def addShoesInBrand(brand, id):
        if (brand.find('.') != -1):
            return []
        shoes = []
        # go into brand directory
        os.chdir(brand)
        # directory names inside brand directory
        shoe_names = os.listdir(path + '/' + brand)
        for shoe in shoe_names:
            if (shoe.find('.') != -1):
                continue

            shoe_name = '''{brand} {fileName}'''.format(
                brand=brand, fileName=shoe.split(".")[0]
            )
            obj = {
                "id": id,
                "title": shoe_name,
                "description": shoe_name,
                "price": 0,

                # "img": brand+'/'+shoe+'/'+img,
                "images": [],
                "category": CATEGORY
            }

            shoe_imgs = files_in_dir(shoe, ext=['.webp'])
            for img in shoe_imgs:
                # add images to shoe
                obj.get("images").append({
                    "image_id": "",
                    "id": "",
                    "alt": "",
                    "src": ASSETS_PATH+'/'+brand+'/'+shoe+'/'+img
                })

            id += 1
            shoes.append(obj)

        os.chdir('..')
        imgs_whithout_shoe = addImagesInDir(brand, id)
        shoes += imgs_whithout_shoe
        id += len(imgs_whithout_shoe)
        return shoes

    for brand in brand_names:
        _shoes = addShoesInBrand(brand, id)
        shoes += _shoes
        id += len(_shoes)

    imgs_whithout_brand = addImagesInDir('..', id)
    shoes += imgs_whithout_brand
    id += len(imgs_whithout_brand)

    return shoes


def main():

    startId = int(sys.argv[1])

    global DIR_INIT
    DIR_INIT = os.getcwd()

    global CATEGORY
    CATEGORY = os.path.basename(DIR_INIT)

    newShoes = json_of_shoes(DIR_INIT, startId)

    # print(images)

    # # save json to file
    # with open('shoes.json', 'x') as f:
    #     f.write(images)

    # make a JSONFile object of shoes.json
    shoes_json = JSONFile('shoes.json')
    shoes_json.make_pretty(indent=2)
    shoes_json.update({
        "shoes": newShoes
    })


if __name__ == "__main__":
    main()
