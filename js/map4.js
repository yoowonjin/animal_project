//map4.js
//지역 검색 모달
document.getElementById('areaSelectOpen').addEventListener('click', function() {
    document.getElementById('areaModal').style.display = 'block';
});

document.getElementById('areaSelectClose').addEventListener('click', function() {
    document.getElementById('areaModal').style.display = 'none';
});
$("#areaSelectOpen").click(function(){
    $("#areaModal").attr("style", "display:block");
});

 $("#areaSelectClose").click(function(){
    $("#areaModal").attr("style", "display:none");
});     


//지역 선택
function categoryChange(e) {
    const state = document.getElementById('district');

    const busan = ['강서구', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구', '기장군'];
    const ulsan = ['남구', '동구', '북구', '중구', '울주군'];

    let add;

    if (e.value === '울산') {
        add = ulsan;
    } else if (e.value === '부산') {
        add = busan;
    }

    state.options.length = 1;

    for (const property in add) {
        const opt = document.createElement('option');
        opt.value = add[property];
        opt.innerHTML = add[property];
        state.appendChild(opt);
    }
}



