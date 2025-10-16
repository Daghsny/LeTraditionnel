function espace(x){
    document.getElementById("esp").value="espace "+x
}
function alpha(ch)
{
    i=0
    ch=ch.toUpperCase()
    while (i<ch.length && ((ch[i]>="A" && ch[i]<="Z") || ch[i]==" "))
    {
        i++
    }
    return i==ch.length
}

function nom(){
     n=document.getElementById("name").value
     if(n.length<=3 || alpha(n)==false)
     {
        alert("Verifier votre nom")
        return false
     }
     return true
}
function mail(){
    m=document.getElementById("email").value
    if(m.indexOf("@")==-1 || m.indexOf("@")>=m.lastIndexOf(".") )
    {
        alert("Verifier votre adresse email")
        return false
    }
    return true
}
function telephone(){
    t=document.getElementById("phone").value
    if(isNaN(t) || t[0]<="1" || t[0]=="6" || t.length!=8)
    {
        alert("Verifier votre téléphone")
        return false
    }
    return true
}

function dateR(){
    d=document.getElementById("date").value
    dr=new Date(d)
    ds=new Date()
    test=true
    if(dr.getFullYear()<ds.getFullYear()){
        test=false
    }
    else{
        if(dr.getFullYear()==ds.getFullYear() && dr.getMonth()<ds.getMonth()){
            test =false
        }
        else{
            if(dr.getFullYear()==ds.getFullYear() && dr.getMonth()==ds.getMonth() && dr.getDate()<ds.getDate()){
                test=false
            }
        }
    }
if(test==false)
    { 
        alert("Vérifier la date de la réservation")
        return false
    }
    return true
}

function nombrePersonne(){
    nomEspace=document.getElementById("esp").value
    nbPersonne=document.getElementById("nbp").value
    if(
        (nomEspace=="espace 1" && nbPersonne>14)
        ||
        (nomEspace=="espace 2" && nbPersonne>8)
        ||
        (nomEspace=="espace 3" && nbPersonne>2)
        ||
        (nomEspace=="espace 4" && nbPersonne>4)
        ||
        (nomEspace=="espace 5" && nbPersonne>4)
        )
    {
        alert("Capacité de l'espace inferieur au persopnne invité")
        return false
    }
    return true
}

function verif(){
    return nom() && mail() && telephone() && dateR() && heureR() && nombrePersonne()
}
