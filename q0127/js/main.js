$(document).ready(function () {
    console.log('hello js');

    const navLinkList = document.querySelectorAll('.navbar .nav-link');
    // console.log('navLinkList',navLinkList);

    const navbar =document.getElementById('navbar');
    // console.log('navbar',navbar);

    const scrollReport = document.getElementById('scrollReport');
    // console.log('scrollReport',scrollReport);


    //透過foreach 取出 navLinkList 所有的dom(類型)
    // console.log('55688');
    
    const navigationTable = {}; //物件用{}

    //很多個 所以用foreach
    navLinkList.forEach(value =>{
        //value 每一個<a>
        console.log('value',value);

        //data-target="section1"
        //js dataset
        const sectionId = value.dataset.target;
        console.log('sectionId',sectionId);

        navigationTable[sectionId] = {
            link : value,
            section: document.getElementById(sectionId)
        };
    });

    console.log('navigationTable',navigationTable);

    window.addEventListener('scroll',function () {
        console.log('window',window);
        const y = Math.round(window.scrollY + navbar.offsetHeight);   //offsetHeight 抓元素的高度
        //Math.round()為了抓整數值
        scrollReport.innerText = `目前所在位置${y}`;
        console.log(`目前所在位置${y}`);

        for (const key in navigationTable){
            console.log('navigationTable[key]',navigationTable[key]);
            const link = navigationTable[key] . link;
            const section = navigationTable[key] . section;
            console.log('link',link);
            console.log('section',section);

            //section top 抓最高點
            const top = section.offsetTop;
            //section bottom 抓最低點
            const bottom = top +section.offsetHeight;

            if(y > top && y < bottom){
                link.classList.add('text-warning');
                section.classList.add('is-active');
            }else{
                link.classList.remove('text-warning');
                section.classList.remove('is-active');
            }
        }
    });


});
