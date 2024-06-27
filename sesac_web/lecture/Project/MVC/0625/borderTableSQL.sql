create table board(
	postid int primary key auto_increment,
    postwriter varchar(20) not null,
    posttitle varchar(100) not null,
    postcontent text,
    posttime datetime not null
);
INSERT INTO board (postid, postwriter, posttitle, postcontent, posttime) VALUES
(1, 'iAmOptimusPrime', '인간시대의 끝이 도래했다.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni fuga ipsam vitae quis corporis omnis odio labore nihil eum ducimus, facere itaque sint earum vel qui? Illum, delectus illo.', '2024-06-12 12:11:00'),
(2, 'HarryPorter', '9 3/4 승강장이 어디인가요', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni fuga ipsam vitae quis corporis omnis odio labore nihil eum ducimus, facere itaque sint earum vel qui? Illum, delectus illo.', '2024-06-12 18:11:00'),
(3, 'Madonsoku', '진실의 방으로.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni fuga ipsam vitae quis corporis omnis odio labore nihil eum ducimus, facere itaque sint earum vel qui? Illum, delectus illo.', '2024-06-13 12:11:00'),
(4, 'SpiderMan', '친절한 이웃 스파이더맨!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni fuga ipsam vitae quis corporis omnis odio labore nihil eum ducimus, facere itaque sint earum vel qui? Illum, delectus illo.', '2024-06-14 12:11:00');

use codingon;

select * from board;