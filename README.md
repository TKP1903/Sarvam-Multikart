# Sarvam

## Steps to deploy sarvam:-

- ### General steps
  1. Build the project on your local machine.
  2. Fix error if any.
  3. Push the code to the repo.
  4. Connect to the server.
  5. Stop the nextjs server.
  6. Remove the OLD build.
  7. Remove the OLD assets.
  8. Remove the OLD package.json && package-lock.json
  9. Copy the NEW build.
  10. Copy the NEW assets.
  11. Copy the NEW package.json && package-lock.json
  12. Run npm install --force
  13. Run the server.
- ### On Windows

  1. Push the code to the company git.
  2. Run npm run build on your local machine. ( This will make a build in the .next directory )  
     **If there are any errors solve them and build again until all errors are gone.**
  3. Connect to the remote ec2 with SSH key auth in both WinSCP and Putty.
  4. In Putty -

     #### Run the following commands

     ```
      # to go to the project directory
      cd ~/sarvam
     ```

     ```
      # to stop the server
      pm2 stop all
     ```

     ```
      # to remove the OLD build (i.e. .next folder)
      sudo rm -rf ./.next
     ```

     ```
      # remove the old package.json && package-lock.json
        sudo rm -f ./package.json
        sudo rm -f ./package-lock.json
     ```

     ```
      # remove the OLD assets folder
      sudo rm -rf <path of the assets folder with changes>

      # repeat for all the assets folders
     ```

     - Now do the following after coping the NEW .next folder && assets from your local machine using WinSCP.

     #### After folder(s) are copied run the following commands to deploy.

     ```
      cd ~/sarvam
     ```

     ```
     sudo npm install --force
     ```

     ```
      # to run the server
      pm2 start npm -- start
     ```

  5. In WinScp -

  #### After deleting the OLD .next and assets folder(s) on the ec2 server follow these steps.

  - Go the "sarvam" dir on the ec2. ( right side panel )
  - Go to the project directory on your local machine where the compiled build is. ( left panel )
  - Copy the following folder(s)/file(s)

  ```
    - .next
    - public ## only the folders with changes
    - Assets ## only the folders with changes
    - package.json
  ```

  - Now finish the deployment in Putty using the copied folder.
