import { Menu } from './menu';
import { MenuComponent } from './menuComponent';
import { MenuItem } from './menuItem';
import { Waitress } from './waitress';

const pancakeHouseMenu: MenuComponent = new Menu(
  '팬케이크 하우스 메뉴',
  '아침 메뉴'
);
const dinerMenu: MenuComponent = new Menu('객체마을 식당 메뉴', '점심 메뉴');
const cafeMenu: MenuComponent = new Menu('카페 메뉴', '저녁 메뉴');
const dessertMenu: MenuComponent = new Menu(
  '디저트 메뉴',
  '디저트를 즐겨 보세요'
);

const allMenus: MenuComponent = new Menu('전체 메뉴', '전체 메뉴');

allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);
allMenus.add(cafeMenu);

dinerMenu.add(
  new MenuItem(
    '파스타',
    '마리나라 소스 스파게티, 효모빵도 드립니다.',
    true,
    3.89
  )
);

pancakeHouseMenu.add(
  new MenuItem(
    'K&B 팬케이크 아침 식사',
    '스크램블 에그와 토스트를 팬케이크와 함께 드립니다.',
    true,
    2.99
  )
);

pancakeHouseMenu.add(
  new MenuItem(
    '팬케이크 아침 식사',
    '계란후라이와 소시지를 팬케이크와 함께 드립니다.',
    false,
    2.99
  )
);

pancakeHouseMenu.add(
  new MenuItem(
    '블루베리 팬케이크',
    '신선한 블루베리로 만든 팬케이크와 블루베리 시럽',
    true,
    3.49
  )
);

pancakeHouseMenu.add(
  new MenuItem(
    '와플',
    '딸기 와플이나 블루베리 와플을 선택하실 수 있습니다.',
    true,
    3.59
  )
);

dinerMenu.add(
  new MenuItem(
    '베지테리언 BLT',
    '식물성 베이컨과 상추, 토마토를 얹은 통밀빵 샌드위치',
    true,
    2.99
  )
);

dinerMenu.add(
  new MenuItem(
    'BLT',
    '베이컨과 상추, 토마토를 얹은 통밀빵 샌드위치',
    false,
    2.99
  )
);

dinerMenu.add(
  new MenuItem(
    '오늘의 스프',
    '감자 샐러드와 함께 오늘의 스프를 드립니다.',
    false,
    3.29
  )
);

dinerMenu.add(
  new MenuItem(
    '핫도그',
    '사워크라우트, 렐리쉬, 양파, 치즈를 얹은 핫도그',
    false,
    3.05
  )
);

dinerMenu.add(
  new MenuItem('찐 채소와 현미밥', '현미밥 위에 야채 찜', true, 3.99)
);

dinerMenu.add(
  new MenuItem(
    '파스타',
    '마리나라 소스를 곁들인 스파게티와 사워도우 빵 한 조각',
    true,
    3.89
  )
);

dinerMenu.add(dessertMenu);

dessertMenu.add(
  new MenuItem(
    '애플 파이',
    '바삭바삭한 크러스트에 바닐라 아이스크림이 얹혀 있는 애플 파이',
    true,
    1.59
  )
);

dessertMenu.add(
  new MenuItem(
    '치즈 케이크',
    '초콜릿 그레이엄 크러스트를 곁들인 크리미한 뉴욕 치즈 케이크',
    true,
    1.99
  )
);

dessertMenu.add(
  new MenuItem('소르베', '라즈베리 한 스쿱과 라임 한 스쿱', true, 1.89)
);

cafeMenu.add(
  new MenuItem(
    '베지 버거와 에어 프라이',
    '통밀 번, 양상추, 토마토, 감자튀김이 들어간 베지 버거',
    true,
    3.99
  )
);

cafeMenu.add(
  new MenuItem('오늘의 스프', '오늘의 스프와 사이드 샐러드 제공', false, 3.69)
);

cafeMenu.add(
  new MenuItem(
    '부리토',
    '통 핀토 콩, 살사, 과카몰리를 곁들인 라지 부리또',
    true,
    4.29
  )
);

const waitress: Waitress = new Waitress(allMenus);

waitress.printMenu();
