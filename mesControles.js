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

/* Fonction de la page Commander */

function choix() {
  if (document.getElementById("cafeE").checked == false) {
    document.getElementById("QteE").value = 0
    document.getElementById("QteE").disabled = true
  } else {
    document.getElementById("QteE").disabled = false
    document.getElementById("QteE").value = 1
  }


  if (document.getElementById("eau").selectedIndex == 0) {
    document.getElementById("QteEau").value = 0
    document.getElementById("QteEau").disabled = true
  } else {
    document.getElementById("QteEau").disabled = false
    document.getElementById("QteEau").value = 1

  }
  if (document.getElementsByName("gaz")[0].checked == document.getElementsByName("gaz")[1].checked) {
    document.getElementById("QteGa").value = 0
    document.getElementById("QteGa").disabled = true
  } else {
    document.getElementById("QteGa").disabled = false
    document.getElementById("QteGa").value = 1

  }


  if (document.getElementById("sand").checked == false) {
    document.getElementById("QteS").value = 0
    document.getElementById("QteS").disabled = true
    document.getElementById("spicy").disabled = true
    document.getElementById("s1").style.color = "black"
    document.getElementById("s2").style.color = "black"
    document.getElementById("s3").style.color = "black"
    document.getElementById("s4").style.color = "black"
  } else {
    document.getElementById("QteS").disabled = false
    document.getElementById("QteS").value = 1
    document.getElementById("spicy").disabled = false

  }


}

function spice() {
  x = document.getElementById("spicy").value
  if (x == 0) {
    document.getElementById("s1").style.color = "red"
    document.getElementById("s2").style.color = "black"
    document.getElementById("s3").style.color = "black"
    document.getElementById("s4").style.color = "black"
  }
  if (x == 1) {
    document.getElementById("s1").style.color = "black"
    document.getElementById("s2").style.color = "red"
    document.getElementById("s3").style.color = "black"
    document.getElementById("s4").style.color = "black"
  }
  if (x == 2) {
    document.getElementById("s1").style.color = "black"
    document.getElementById("s2").style.color = "black"
    document.getElementById("s3").style.color = "red"
    document.getElementById("s4").style.color = "black"
  }
  if (x == 3) {
    document.getElementById("s1").style.color = "black"
    document.getElementById("s2").style.color = "black"
    document.getElementById("s3").style.color = "black"
    document.getElementById("s4").style.color = "red"
  }
}


