SSH to the server
$ sudo apt-get install subversion  //Install this in server
$ sudo apt-get install openssh-server //Install this in server
$ sudo mkdir -p /svn/repos //create a folder in the server
$ sudo svnadmin create /svn/repos/<reponame> //creating a repository in the server 
$ sudo vi /svn/repos/hello/conf/svnserve.conf     //edit the svn server configuration
    - modify
    - anon-access = none
    - auth-access = write
    - passwod-db = passwd 
$ sudo vi /svn/repos/hello/conf/passwd 
    username = password
$ sudo svnserve -d -r /svn/repos //start the server


$ svn import <yourlocalfoldername> <svn://ipaddress/pathofrepofolder> //initial push the file from local to the server 
svn://iactdcdvap003.act.faa.gov/svn/Falcon
$ pidof svnserve //get the process id of the svn
$ sudo kill -9 <svinpid> //stops the current svn running



https://www.cs.usfca.edu/svn/srollins

$ svn list <svn url site>
$ svn mkdir <svn url site>/<yourfoldername> -m "-m is your commit message"  
$ svn co  <svn url site>/<yourfoldername>  //to checkout project from the server
$ cd <yourfoldername>  //go inside your svn folder
//modify your local svn
$ mkdir <newfoldername>
$ cd <newfoldername>
//add a file inside the new <newfoldername>
$ cd ..
$ svn add <newfoldername>
$ svn commit -m "-m is your commit message"   //commit changes to your local svn 
$ svn up //
$ svn log 

$ ssh -yourusername <ssh url>
$ rusers -a //to see which specific machine to login
$ ssh <machinenaname> 
$ mkdir <newnewfoldername>
$ cd <newnewfoldername>
$ svn co  <svn url site>/<yourfoldername> 

//to login to server
$ ssh <username>@<url>

//client
$ mkdir <foldername>
$ cd <foldername>
$ mkdir trunk //HEAD of the  code 
$ mkdir branches //comes from the trunk
$ mkdir tags //matured branches
$ svn import <yourlocalfoldername> <svn://ipaddress/pathofrepofolder> //push to server
$ svn co  <svn url site>/<yourfoldername> 
$ cd <yourfoldername/trunk> 
    - modify trunk like add a file 
trunk $ svn add <newfoldername || filename>
trunk $ svn commit -m "-m is your commit message"  //code push to the server

//In the server
$ svn copy  <svn: url site/yourfoldername/trunk> <svn: url site/yourfoldername/branches/foldername>

//client
$ cd branches
branches $ svn up //pulls from the server
branches $ ls //you should see the branches
    - modify branches
branches/specificbranch $ svn commit -m "-m is your commit message"   //commit changes to your local svn 
branches/specificbranch $ svn up //compares the local branch from the server and updates if there's changes
branches/specificbranch $ svn merge ^/trunk //pulls trunk to branch
branches/specificbranch $ svn commit -m "-m is your commit message"  //code push to the server
mainrepo $ svn up //update all folder
trunk $ svn merge --reintegrate ^/branches 
trunk $ svn up 
trunk $ svn commit -m "-m is your commit message"  //code push to the server
----------------------------------------
svn
- merged based
    - developers checkout local copies of code
    - changes to the same file are merged
- commits are atomic 
- uses properties for metadata
- branching and tagging are copies
- different implementations

Basic Commands
Checking out code - create a folder svn inside the folder, right click svn checkout. Preferably start at trunk 
Commiting Code - make changengs, right click on the main folder and svn commit 
Add - right click the file then svn add
Delete - right click the file and delete, then svn commit make sure that it is checked. 
    When a new file is added (not commited), but you need to delete it. Delete it mannually. 
    And then on the commit, right click and delete. 
    Or to mannually delete it using SVN, right click and svn delete and then do a commit (the deleted file should be checked).
Rename - Just rename the file manually, then in commit, check both filename. Or use SVN to rename it. Then do a SVN commit.
Blame - right click on specific file and click blame and choose the right revision. Right click on the user name and show changes
Update - Right click the main folder, and click scn update. Right click on the file update to revision. To check for modifications, Right click the main folder, and check for modifications.
Ignore - Right click on the file or folder and add to ignore list
Revert - Right click the main folder, and click  revert. Check the file that needs to be reverted. Go back to the main folder and click commit. Or  Right click on the main folder and click commit. In the commit dialog box, right click the file and click revert. 
Properties - Right click on the file or folder and click properties and modify ignore as needed.And do a svn Commit. 


Branching
- Feature
- Release
- Different Version


- Branch from the trunk - right click on the trunk and click branch/tag and don't use the default trunk, click browse and create a branch insed branches folder.
    - Make sure to check switch working copy to new branch/tag
  -- how to know which branch you are on - right click the folder and click properties (not svn properties just default windows folder proterties), click subversion and see the URL
- Switch - right click switch from the main folder.
- Merging - First you must be in the destination folder. So, first swith to trunk from branch. Right click trubnk and click merge. Option 2, the simpliest. Option 1 rare. Option 3, not mostly used. Pick 2, and choose the branch. 
    - Optional - test the merge.
    - then do a commit
- Conflicts - Scenario: Trunk has an ! in a file and Branch has ? in a file. 
    - Commit the changes in branch. 
    - Switch to Trunk, Do a merge using option 2 and point to the branch that you are going to merge with the trunk
    - Conflict - Edit conflict. Right click use this text block or use the whole file or manual edit and then save and resolve
    - then do a commit
- Tagging - From trunk. Right click trunk, the click branch/tag. Go to tags/ folder, and create a tag/version-1 folder

- Showlog 
    -  Right click on the the mainfolder or on specific file, and click showlog 
    - You can filter and find for changes
    - double click the file to see in details the changes
    - check sto on copy/rename - to see changes only in branch
    - checked include merge revision - make sure you are in trunk
- Commit Monitor
    - Click add project
    - Click check now to see new changes
- Branching Strategies
    - Branch per Feature - weakness overhead
    - Bracnh per Release - Weakness overhead
    - Branch per Developer 
    - Branch per Developer
    - Branch per Team 
    - Branch only when needed
- Merge In and Out Startegy 
    - from trunk create a branch. 
    - switch to branch, then merge the trunk to branch
    - swtich to trunk, then merge the branch to trunk
- Advance Merging - Merge from range of revisions wich is option 1 (from merging). and just apply the changes you want. 