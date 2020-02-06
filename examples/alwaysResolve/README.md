run node ex1.js, make sure your configs are set, this uses the rapidAPI country v1 api,
which is free.  I pass the key from the veroData.js (in the src folder) file. Look at 
the require statements at the top, yours are likely to be different

If you're cloning this as is, from within this directory, running: 

mv ex1.js ../../ex1.js
cd ../../
node ex1.js

might work, as long as you have a config file set correctly....


inputs: 
None

outputs: 
"got answers for the following: ar:Argentina - us:United States - jp:Japan - ca:Canada - fr:France
but the following codes: [ap,ur] didn't get any results"
