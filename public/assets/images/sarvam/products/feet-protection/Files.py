import json
import os

__all__ = ['File', 'JSONFile']


class File:
    def __init__(self, file_name):
        # Check if the file exists
        if os.path.exists(file_name):
            # Open the file in read/write mode
            self.file = open(file_name, 'r+')
        else:
            # Create the file if it doesn't exist
            self.file = open(file_name, 'w')

    def __enter__(self):
        # Return the File object
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Do nothing
        pass

    def __del__(self):
        # Close the file in the destructor
        self.file.close()


class JSONFile(File):
    def __init__(self, file_name):
        # Call the parent class's __init__() method
        super().__init__(file_name)

        # Try to parse the JSON data from the file
        try:
            self.json_data = json.load(self.file)
        except:
            # Set the json_data attribute to an empty dictionary if the operation fails
            self.json_data = {}

        self.usePretty = False
        self.pretty = {
            "sort_keys": True,
            "indent": 4,
        }

    def __del__(self):
        # save the file
        self.save()
        # call the parent class's __del__() method
        super().__del__()

    def update(self, data):
        # Update the JSON data with the new data
        try:
            self.json_data.update(data)
        except (json.decoder.JSONDecodeError, FileNotFoundError):
            self.json_data = data

        # call save
        self.save()

    def save(self):
        # save the changes to the file
        file_name = self.file.name
        with File(file_name) as original_file:
            json.dump(
                self.json_data,
                original_file.file,
                **self.pretty if self.usePretty else {}
            )

    def make_pretty(self, indent=4, sort_keys=True):
        self.pretty = {
            "sort_keys": sort_keys,
            "indent": indent,
        }
        self.usePretty = True

    def make_ugly(self):
        self.usePretty = False


def comments():
    # --------------------- un-abstartcted version ---------------------
    # # Use the JSONFile class to open the original and changes JSON files
    # with JSONFile('original.json') as original_file:
    #   original = original_file.json_data

    # with JSONFile('changes.json') as changes_file:
    #   changes = changes_file.json_data

    # # Update the original JSON with the changes
    # original.update(changes)

    # # Save the updated JSON to the original file
    # with File('original.json') as original_file:
    #     json.dump(original, original_file.file)
    return None
