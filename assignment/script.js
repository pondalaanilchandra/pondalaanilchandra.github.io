var names=new Array();
names[0]="Yaakov";
names[1]="john";
names[2]="jen";
names[3]="anil";
names[4]="chandra";
names[5]="jyo";
names[6]="kavitha";
names[7]="manisha";
names[8]="sunitha";
for(var i=0;i< names.length;i++)
{
    if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='J')
    {
    console.log("Goodbye "+ names[i]);
    }
    else 
    {
        console.log("Hello "+ names[i]);
    }

}