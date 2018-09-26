document.addEventListener("DOMContentLoaded", function(){

  let db = connect('https://codesign-9a39e.firebaseio.com')
  let y = 1
  let z = 1
  db.download('/',function(data){
    for(let i in data){
      let x = '.box'+y
      db.download('/'+i+'/courses',function(data2){
        console.log(data2)
        replace(x,{'name':i,'items':data2})
        let seta1 = document.querySelector('#seta1')
        let up1 = document.querySelector('#setaup1')
        let list1 = document.querySelector('#list1')


        seta1.addEventListener('click', function(){
          seta1.classList.add('hidden')
          up1.classList.add('visible')
          list1.classList.add('listAparece')
          })

        up1.addEventListener('click', function(){
          seta1.classList.remove('hidden')
          up1.classList.remove('visible')
          list1.classList.remove('listAparece')
        })

        let seta2 = document.querySelector('#seta2')
        let up2 = document.querySelector('#setaup2')
        let list2 = document.querySelector('#list2')


        seta2.addEventListener('click', function(){
          seta2.classList.add('hidden')
          up2.classList.add('visible')
          list2.classList.add('listAparece')
          })

        up2.addEventListener('click', function(){
          seta2.classList.remove('hidden')
          up2.classList.remove('visible')
          list2.classList.remove('listAparece')
        })

        let seta3 = document.querySelector('#seta3')
        let up3 = document.querySelector('#setaup3')
        let list3 = document.querySelector('#list3')


        seta3.addEventListener('click', function(){
          seta3.classList.add('hidden')
          up3.classList.add('visible')
          list3.classList.add('listAparece')
          })

        up3.addEventListener('click', function(){
          seta3.classList.remove('hidden')
          up3.classList.remove('visible')
          list3.classList.remove('listAparece')
        })

        let seta4 = document.querySelector('#seta4')
        let up4 = document.querySelector('#setaup4')
        let list4 = document.querySelector('#list4')


        seta4.addEventListener('click', function(){
          seta4.classList.add('hidden')
          up4.classList.add('visible')
          list4.classList.add('listAparece')
          })

        up4.addEventListener('click', function(){
          seta4.classList.remove('hidden')
          up4.classList.remove('visible')
          list4.classList.remove('listAparece')
        })
      })
      y++
    }

    })
})
