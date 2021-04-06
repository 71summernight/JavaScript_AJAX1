var students = [{
    "department": 0,
    "name": "비트캠프",
    "address": "강남대로 459"
}, {
    "department": 1,
    "name": "김수연",
    "address": "동작구 장승배기로3길"
}, {
    "department": 1,
    "name": "김영허",
    "address": "장승배기로24가길"
}, {
    "department": 1,
    "name": "박주현",
    "address": "노원구 노원로"
}, {
    "department": 1,
    "name": "이승준",
    "address": "수지구 성복2로"
}, {
    "department": 1,
    "name": "현상진",
    "address": "평택시 비전2로"
}, {
    "department": 3,
    "name": "김대업",
    "address": "강동구 구천면로17길"
}, {
    "department": 3,
    "name": "김진아",
    "address": "중원구 자혜로8번길"
}, {
    "department": 3,
    "name": "안승주",
    "address": "동대문구 고산자로"
}, {
    "department": 3,
    "name": "이동근",
    "address": "동대문구 장한로27가길"
}, {
    "department": 3,
    "name": "이보희",
    "address": "가평읍 오목내길"
}, {
    "department": 3,
    "name": "한석희",
    "address": "송파구 백제고분로"
}, {
    "department": 2,
    "name": "이가희",
    "address": "관악구 남부순환로"
}, {
    "department": 2,
    "name": "김명환",
    "address": "감일백제로"
}, {
    "department": 2,
    "name": "김현진",
    "address": "송파구 송이로"
}, {
    "department": 2,
    "name": "김영훈",
    "address": "송파구 올림픽로"
}, {
    "department": 2,
    "name": "서태희",
    "address": "권선구 금곡로"
}, {
    "department": 2,
    "name": "이상엽",
    "address": "덕양구 중앙로"
}, {
    "department": 4,
    "name": "백보성",
    "address": "서초구 효령로"
}, {
    "department": 4,
    "name": "정아인",
    "address": "기흥구 언동로"
}, {
    "department": 4,
    "name": "하준수",
    "address": "김포시 김포대로"
}, {
    "department": 4,
    "name": "박선희",
    "address": "영등포구 도신로"
}, {
    "department": 4,
    "name": "문형철",
    "address": "수원시 봉영로"
}, {
    "department": 5,
    "name": "이광희",
    "address": "관악구 신림로65길"
}, {
    "department": 5,
    "name": "이성훈",
    "address": "동작구 사당로2길"
}, {
    "department": 5,
    "name": "임나영",
    "address": "동작구 서달로12길"
}, {
    "department": 5,
    "name": "오주환",
    "address": "노원구 공릉로"
}, {
    "department": 5,
    "name": "정수빈",
    "address": "중랑구 동일로109길"
}, {
    "department": 5,
    "name": "조하선",
    "address": "영등포구 디지털로56길"
}

];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.503149854033595, 127.02456409744394), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };
var markers = [];
var infoWindows = [];

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption);
// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다.
for (let i = 0; i < students.length; i++) {
    geocoder.addressSearch(students[i].address, function (result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var mMarker = new kakao.maps.Marker({
                map: map,
                position: coords,
                title: students[i].name + "@" + students[i].department

            });
        }

        markers.push(mMarker);
    });
}



function setMarkers(map, team_num) {

    //열려있는게 있다면, 전부 닫아주고,
    for (var i = 0; i < infoWindows.length; i++) {
        infoWindows[i].close();
    }
    //초기화
    infoWindows = [];


    for (var i = 0; i < markers.length; i++) {
        title = markers[i].getTitle()
        info = title.split('@');
        name = info[0]
        department = parseInt(info[1])

      if (team_num == 0) {
            markers[i].setMap(map);
        } else if (department == team_num) {
            markers[i].setMap(map);
            
            let infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">' +
                    name + '</div>'
            });
            infoWindows.push(infowindow);
            infowindow.open(map, markers[i]);
        }
    }
}




// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers(team_num) {
    setMarkers(null, team_num);
}


// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers(team_num) {
    hideMarkers(0);
    setMarkers(map, team_num);

}
/*
function showinfoName(team_num) {
    debugger;
    setinfoName(map, team_num);
}

*/