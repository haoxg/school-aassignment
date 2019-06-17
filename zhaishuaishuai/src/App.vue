<template>
  <div id="app">
      <router-view/>
    
  </div>
</template>

<style>
/* 重置样式表 */
*{margin: 0;padding: 0;}
ul,ol{list-style: none;}
em,i{font-style: normal;}
a{text-decoration: none; color: #000;}
/* a:hover{text-decoration: underline;} */
input{border:none; outline: none; background-color: transparent;}
body{position: relative; overflow-x: hidden;overflow:  ;}
/*公用*/
.clearfix:after,.clearfix:before{content: '';display: table;}.clearfix:after{clear: both;}
.hide{display: none;}
.fl{float: left;}
.fr{float: right;}

</style>
