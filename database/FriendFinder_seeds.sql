-- ONLY RUN THIS ONCE
USE FriendFinder_db;
INSERT INTO
  friends (friend_name, friend_img, scores) VALUE(
    'Bob',
    'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    '1523542315'
  ),(
      'John',
      'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=',
      '1324555131'
  ),(
      'Karen',
      'https://media.gettyimages.com/photos/happy-young-woman-posing-on-white-background-picture-id839128434?b=1&k=6&m=839128434&s=612x612&w=0&h=-qtxPOUetXwrQb0I99Bh59ySYMafw1C3ICMyvmN8dPw=',
      '1145234452'
  ),(
      'Lilian',
      'https://s.yimg.com/uu/api/res/1.2/8xfzwPBD4_SkspZyoXH0XQ--~B/YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2018-11/011ccdd0-e394-11e8-bdf6-62471d1633bc',
      '3243115155'
  ),(
      'Jeff Bezos',
      'https://i2.cdn.turner.com/money/dam/assets/170727121329-jeff-bezos-richest-man-amazon-340xa.jpg',
      '5555555555'
  ),(
      'Donald Trump',
      'https://image.cnbcfm.com/api/v1/image/105047726-GettyImages-928163596.jpg?v=1532563673',
      '1111111111'
  );
-- RUN THIS CODE TO VIEW TABLE
  USE FriendFinder_db;
SELECT
  *
FROM
  friends;