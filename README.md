# Dshield
Dshield was built to give the possibility to the web developer to detect modifications of the source code of their site by third parties such as legitimate customers or other malicious actors.
Dshield allows to
Detect the opening of the devtool
Detect unauthorized changes to source code like
Adding 'script, style, iframe' tag
Editing 'div,p....' tag content technique commonly used by fake news creators
Dshield can also be used as anti-cheat tools for browser-based games
<details><summary>Integration</summary>
<p>
Add the script tag with the correct path for Dshield.js file  after </body> balise 
#### initialisation
```js
        //start the Dshield 
        Dshield.start(callback1,callback2);
        //callback1 is triggered when it detects the opening of the devtool
        //callback2 is triggered when it detects unauthorized changes
        
</p>
</details>
<details><summary>More</summary>
<p>
More functionnalities 
#### Get data
```js
        var data=Dshield.data;
</p>
</details>
Contributing
>Pull requests are welcome i would like he have other functionnality


