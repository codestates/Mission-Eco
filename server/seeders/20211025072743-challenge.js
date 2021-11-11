"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("challenges", [
      {
        img: "../img/challenge/001.png",
        name: "미션 무라벨",
        contents:
          "무라벨 생수병은 간편한 분리배출을 도와 폐페트병의 재활용률을 높이고,라벨 포장재의 비닐 폐기물은 줄일 수 있어요.",
        level: 2,
        upload: true,
      },
      {
        img: "../img/challenge/002.png",
        name: "미션 소프넛",
        contents:
          "소프넛은 천연 세제로 사용되는 열매로 일상에서 사용하는 주방세제,세탁세제, 바디워시 등을 대체할 수 있습니다. 세제로 인한 수질 오염, 세제의 플라스틱 용기 등을 줄일 수 있는 소프넛을 이용해보세요.",
        level: 3,
        upload: false,
      },
      {
        img: "../img/challenge/003.png",
        name: "미션 용기내챌린지",
        contents:
          "음식 포장으로 발생하는 일회용 용기를 줄이기 위해 천주머니, 다회용기 등으로 식자재, 음식 등을 포장하는 운동입니다. 여러분도 용기내 보세요.",
        level: 2,
        upload: false,
      },
      {
        img: "../img/challenge/004.png",
        name: "미션 고기 없는 하루",
        contents:
          "비틀즈의 멤버였던 폴 매카트니가 공장식 축산업 내 동물들의 고통, 지구온난화를 비롯해 환경 문제 등을 이유로 일주일 중 최소 하루는 채식을 하자고 제안을 한 캠페인입니다. 일주일 중 하루, 채식을 해보세요.",
        level: 1,
        upload: false,
      },
      {
        img: "../img/challenge/005.png",
        name: "미션 분리수거",
        contents:
          "분리수거를 해야하는 이유, 바로 재활용을 편하게 하기 위해서입니다. 재활용이 될 수 있는 쓰레기들을 각 가정에서 잘 분류하여 배출하자는 것에 의의가 있습니다. 올바른 분리수거 방법으로 분리 배출을 실천해보세요.",
        level: 1,
        upload: false,
      },
      {
        img: "../img/challenge/006.png",
        name: "미션 천연 수세미",
        contents:
          "일반적으로 사용하는 수세미는 보통 플라스틱 섬유로 만들어지며, 이는 오랫동안 썩지않아 처리하기 매우 곤란합니다. 플라스틱을 줄이기 위해 천연 수세미를 사용해보세요.",
        level: 2,
        upload: true,
      },

      {
        img: "../img/challenge/007.png",
        name: "미션 플로깅",
        contents:
          "플로깅이란 조깅을 하면서 동시에 쓰레기를 줍는 운동을 말합니다. 운동과 동시에 여러분 주위를 깨끗이 만드는 운동! 한 번 도전해보세요.",
        level: 3,
        upload: false,
      },
      {
        img: "../img/challenge/008.png",
        name: "미션 물없이 세차",
        contents:
          "세차도 환경을 많이 오염시킨다는 사실을 알고 계셨나요? 자동차 한 대당 100L의 물을 사용할 정도로 다량의 물과 세제를 사용하기 때문입니다. 물을 적게 사용하는 스팀을 이용한 세차 혹은 물 없이 세제를 묻힌 수건만으로 차를 닦아내는 세차 등을 실천해보세요.",
        level: 3,
        upload: false,
      },
      {
        img: "../img/challenge/009.png",
        name: "미션 자전거타기",
        contents:
          "교통부문 온실 가스의 약 94%가 도로에서 발생됩니다. 출퇴근 시 자전거를 이용한다면 도로에서 발생하는 온실가스를 상당량 줄일 수 있습니다. ",
        level: 2,
        upload: true,
      },
      {
        img: "../img/challenge/010.png",
        name: "미션 캔크러시",
        contents:
          "알류미늄 캔의 재활용률을 높이기 위해 올바른 분리 배출 방법인 캔 속 이물질이 들어가지 않도록 밟거나 구부려 버리는 것을 널리 알리기 위한 운동입니다. 사용한 캔을 밟아 배출해보세요.",
        level: 1,
        upload: true,
      },
      {
        img: "../img/challenge/011.png",
        name: "미션 읽지 않은 이메일 삭제",
        contents:
          "전 세계에서 삭제 되지 않은 스팸 메일로 인해 매년 330억 kW의 전기가 소모되고 있습니다. 읽지 않은 이메일을 삭제 해보세요.",
        level: 1,
        upload: false,
      },
      {
        img: "../img/challenge/012.png",
        name: "미션 리필스토어",
        contents:
          "사용한 플라스틱을 재사용하여 플라스틱 이용을 줄이고 자원을 절약할 수 있는 리필스토어를 이용해보세요.",
        level: 3,
        upload: false,
      },
      {
        img: "../img/challenge/013.png",
        name: "미션 언플러그",
        contents:
          "사용하지 않는 대기상태에서도 많은 전력을 소비 할 수 있습니다. 사용하지 않는 플로그는 빼 보세요.",
        level: 1,
        upload: true,
      },
      {
        img: "../img/challenge/014.png",
        name: "미션 no포장",
        contents:
          "플라스틱 용기 없이 비누처럼 편리하게 사용할 수 있는 샴푸바, 설거지바를 사용해 보세요.",
        level: 3,
        upload: true,
      },
      {
        img: "../img/challenge/015.png",
        name: "미션 플라스틱 거절",
        contents:
          "음식 주문시에는 플라스틱 수저, 젓가락, 그릇 용기는 최대한으로 줄여 주문을 해보세요.",
        level: 1,
        upload: false,
      },
      {
        img: "../img/challenge/016.png",
        name: "미션 에코백",
        contents:
          "장을 볼 때 에코백을 사용하여, 가정에서 불필요한 플라스틱 비닐봉지 폐기가 없도록 실천 해보세요.",
        level: 2,
        upload: true,
      },
      {
        img: "../img/challenge/017.png",
        name: "미션 텀블러",
        contents:
          "개인 텀플러를 사용해서, 한 번 만 쓰고 버릴 일회용 컵 소비를 줄여 보세요.",
        level: 2,
        upload: true,
      },
      {
        img: "../img/challenge/018.png",
        name: "미션 Buy Nothing Day",
        contents:
          "아무 것도 사지 않은 날을 정하여 불필요한 소비를 줄이고, 우리 지구의 자원을 절약해 보세요.",
        level: 3,
        upload: false,
      },
      {
        img: "../img/challenge/019.png",
        name: "미션 환경성적표지마크",
        contents:
          "자원과 에너지를 덜 소비하고 오염물질을 덜 배출하는 제품에 붙은 환경성적표지마크를 확인하고 상품을 구매해보세요.",
        level: 3,
        upload: true,
      },
      {
        img: "../img/challenge/020.png",
        name: "미션 에코마일리지",
        contents:
          "에코마일리지(탄소포인트제) 가입으로 에너지 절약, 고효율제품 구매 등을 통해 마일리지를 쌓고 현금 전환 및 친환경제품 구매 등 다양하게 사용해보세요.",
        level: 3,
        upload: true,
      },
      {
        img: "../img/challenge/021.png",
        name: "미션 1등급가전",
        contents:
          "에너지소비효율 1등급 제품은 다른 제품에 비해 에너지절약 효과가 월등하여 상당한 에너지 절약 효과를 볼 수 있습니다. 에너지 소비효율을 확인해보세요.",
        level: 3,
        upload: true,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("challenges", null, {});
  },
};
