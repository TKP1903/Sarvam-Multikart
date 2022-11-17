# Sarvam-Multikart
## Steps to deploy sarvam:-
1. Push the code to the company git.
2. Run npm run build on you local machine. ( This will make a build in the .next directory )  
   **If there are any errors solve them and build again until all errors are gone.**
3. Connect to the remote ec2 with SSH key auth in both WinSCP and Putty.
4. In putty -
    * cd into Sarvam-Multikart dir.
    * Pull from the git to update the files here ( force pull could be required sometimes ).
    * Run the following commands
    ```
    # to remove the OLD build (i.e. .next folder)
    rm -rf ./.next
    # to stop the runnig server of the live website
    pm2 stop all # this could be run after the .next is copied
    ```
    * Now do the following after coping the NEW .next folder from your local machine using WinSCP.
    * After folder is copied run the following commands to deploy.
    ```
    # to run the copied build
    pm2 start npm -- start
    ```
5. In WinScp -
    * After deleting the OLD ./.next folder on the ec2 follow these steps.
    * Go the "Sarvam-Multikart" dir on the ec2. ( right side panel )
    * Go to the project directory on your local machine where the compiled build is. ( left panel )
    * Copy the .next folder to the ec2 "Sarvam-Multikart" directory.
    * Now finish the deployment in Putty using the copied folder.
