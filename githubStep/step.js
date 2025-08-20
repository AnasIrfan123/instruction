//                                        INTERVIEW QUESTION

//  WHAT IS GITHUB ??

// GitHub aik website aur platform hai jahan developers apna code store, share aur manage karte hain.

// Ye Git system par based hai (Git version control hota hai jo code k changes save karta hai).

// Is me tum apna project upload kar sakte ho, aur agar galti ho jaye to purani version pe wapis jaa sakte ho.

// Duniya bhar k developers team work k liye use karte hain — ek hi project par multiple log mil k kaam kar sakte hain.

// Public projects me tum dusron ka code dekh sakte ho, aur apne project ko dusron se improve karwa sakte ho.

// So, short me:
// 👉 GitHub ek digital folder hai jo online hota hai, jahan tum apna code safe rakh kar duniya k sath share kar sakte ho.

//   EXPLAIN GIT DISTRIBUTOR??

// Git ek distributed version control system hai.
// "Distributed" ka matlab hai ke har developer ke computer me poora project ka history (repo) hota hai — sirf ek central server par depend nh hota.

// WHAT IS REMOTE??
// Git me remote ka matlab hai tumhara project ka online version (server pe copy) jo tumhare local computer wale project se connected hota hai.

//  WHAT IS CLONE ??
// git clone <repo-url> se tum remote repository ki poori copy apne computer me bana lete ho.
// Is copy ko local repository kehte hain.

// Nah, cloning se repo globally access nh hoti.
// Jab tum repo clone karte ho, wo sirf tumhare computer par copy hoti hai.
// Aur wo tumhare GitHub wale remote repository se connected hoti hai.
// Dusre log tabhi access kar sakte hain agar tum unko GitHub repo ka link do ya unke pass permission ho.

//   @@@@@@@@@    CLONING REPO KO EXCESS OR EDIT CODE THEN PUSH COMMAND      @@@@@@@@@ 

// git clone <repo-url>     Is se tumhari computer pe repo ki local copy ban jati hai.
// cd repo-name
// git clone https://github.com/user/repo.git
// cd repo
// # code me changes karo
// git status
// git add .
// git commit -m "Fixed bug in login page"
// git push origin main

//   _______________________________ Git      Steps______________________________________ 


//     1 )   git init       →     new repo banaya.
//     2 )   git status     →     Yeh check karta hai kaunse files new hain
//     3 )   git add -A     →     file ko staging area me daala.
//     4 )   git status     →     Yeh check karta hai kaunse files new hain
//     5 )   git config --global user.name ---- => NAME      →     username & email set kiye.
//     6 )   git config --global user.email ---- => EMAIL    →     username & email set kiye.
//     7 )   git commit -m "work complete"                   →     commit ban gaya (local repo me save).
//     8 )   git remote add origin --- => REPO LINK          →     GitHub repository se link kiya.
//     9 )   git push -u origin master / main --- => jo araha ho terminal pr   →   GitHub pe code upload ho gaya.



//        ********************  Basic Git Commands with Meaning  ***********************

// git init
// → Is se new Git repository create hoti hai (project tracking start hota hai). → Naya Git project shuru karta hai (repo bana deta hai).

// git status
// → Yeh check karta hai kaunse files new hain, kaunse change hui hain aur kaun commit ke liye ready hain.
// → Batata hai kaunse files new hain, modified hain ya commit ke liye ready hain.

// git add <file>
// → Specific file ko staging area me dalta hai (ready for commit).

// git add -A ya git add .
// → Saari new/changed/deleted files staging area me dal deta hai.

// git config
// → Git ki settings set karne ke liye (jaise name, email).

// --global
// → Setting sab projects ke liye apply hogi (only ek project ke liye nh).

// user.name 
// → user ka name get krta konsa user ha 

// user.email
// → user ki email authentication k lye user kis email sy repo me code bhje rha ha 

// git commit -m "message"
// → Apne staged changes ko ek snapshot (save point) bana deta hai with a message k sath (or jo commit user ny dia hota ha us k sath save krta ha 
//   file me ).

// git remote
// → GitHub repository ka link save/review karne ke liye use hota hai.

// origin
// → Default naam hota hai us GitHub repository ka jahan tum push/pull karte ho. ( remote add origin <url> → apni repo ko GitHub ke link se jodo )

// git push
// → Apne commits (local changes) GitHub repository me bhejta hai (upload hoti hain).

// git => -u
// → ka matlab hai upstream set karna 👉 yani ek dafa branch ko GitHub wali branch se connect kar do, taake baad me sirf git push ya git pull likhne se kaam ho jaye, branch name dobara na likhna pade

// master
// → Main branch ka purana default naam (ab zyada projects me main hota hai).
// mtlab GitHub ki origin repo ki master branch”.

// git clone <url>
// → GitHub se pura project apne computer me copy (download) kar leta hai.
// → GitHub se pura repo copy (download) karke apne computer me banata hai.

// git pull
// → GitHub repository se latest changes apne computer me le aata hai (download + merge).

// git log
// → Pichle commits ka history dikhata hai (kisne kya changes kiye).

// git branch
// → Dikhata hai currently kis branch me ho aur aur branches ka list.

// git checkout <branch>
// → Kisi aur branch me switch karne ke liye use hota hai.

// git merge <branch>
// → Do branches ke changes ko merge (combine) karta hai.

// branch
// → Ek alag development line hoti hai (alag copy of code jisme experiment kar sakte ho).


// 👉 Matlab simple:

// add = prepare files

// commit = save snapshot

// push = upload to GitHub

// pull = download from GitHub

// 👉 Flow samajhne ka easy tareeqa:

// init → start repo

// config --global → name/email set karo

// status → check karo files ka status

// remote add origin <url> → apni repo ko GitHub ke link se jodo

// branch → alag version banao (jaise experiment ke liye)

// master/main → main branch hoti hai

// clone → already bani repo ko download kar lo



//   _______________________________ To updated code & files folder to existing repo use: ______________________________________ 

//     1 )   git status
//     2 )   git add -A
//     3 )   git commit -m "new update / added new folders and files"
//     4 )   git push -u origin master / main --- => jo araha ho terminal pr


// ____________________  To pull the code existing repo use:_________________________



// “GitHub ke main branch se latest code le kar mere local project (folder) me update kar do.”

//      *** Step by Step ***

//   cd project-folder

//     1 )   git pull origin main / master  

// origin = tumhari GitHub repo ka default remote naam
// main = branch ka naam (agar repo me master hai to master likhna hoga)

// 🔹 Easy Meaning

// push = apna code GitHub par bhejna (upload)
// pull = GitHub ka code apne folder me lana (download + merge)

// Matlab agar team member ne GitHub pe changes kiye hain, tum bas git pull chalao aur tumhare folder me woh changes aa jayenge.

// Kya chaho mai tumhe push aur pull ka full ek real-life example bana kar samjhau (tum change karo → push, aur doosra banda change kare → tum pull)?



// ____________________  To clone code to existing repo use:_________________________

//     1)    git clone =>  <REPO LINK>
                            //  what is working of this command => git clone

// Git Repository (Repo) URL
// Har GitHub project ka ek URL hota hai (jaise: https://github.com/user/project.git).
// Ye URL bataata hai ki project online GitHub par kahan pada hai.
// Is URL ki madad se tum us repo ko apne computer par la sakte ho.

// git clone <repository-url> ka matlab hai:
// 👉 “GitHub se pura project (repo) apne computer me copy/download karna.”

// Clone karne ke baad tumhare computer me ek local copy ban jaati hai jisme tum changes kar sakte ho.

// → Clone sirf ek local copy banata hai. Global ka matlab hota hai har jagah use hone wali setting (jaise git config --global).
// Ek repo sirf tumhare project folder me hoti hai, global system me nahi.
// Jab tum clone karte ho to saath hi Git automatically us remote ka naam origin rakh deta hai (yaani link GitHub se connected ho jata hai).

// Example Flow:

// Tumhe ek project pasand aya GitHub pe.
// Uska repository URL copy kiya.

// Command likhi:
// git clone https://github.com/user/project.git
// Ab tumhare computer me uska pura code folder ke andar aa gaya.

// ⚡ Easy Meaning:

// Repo URL = project ka address on GitHub
// git clone = pura project download karke apne system me copy banana
