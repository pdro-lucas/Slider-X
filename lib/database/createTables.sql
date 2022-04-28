/* Create image table */
CREATE TABLE IF NOT EXISTS `image`
(
 `id`             int(11) NOT NULL AUTO_INCREMENT,
 `title`          varchar(255) NOT NULL ,
 `tag`            varchar(45) NULL ,
 `description`    varchar(255) NULL ,
 `image_name`     varchar(255) NOT NULL ,
 `image_location` varchar(255) NOT NULL ,
 `active`         tinyint(1) NOT NULL ,
 `date`           timestamp NOT NULL ,

PRIMARY KEY (`id`)
);


/* Create user table */
CREATE TABLE IF NOT EXISTS `user`
(
 `id`       int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(255) NOT NULL ,
 `email`    varchar(255) NOT NULL ,
 `password` varchar(255) NOT NULL ,

PRIMARY KEY (`id`)
);
