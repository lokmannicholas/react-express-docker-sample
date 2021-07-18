CREATE TABLE IF NOT EXISTS `plans` (`id` INTEGER NOT NULL auto_increment , `planName` VARCHAR(255), `features` VARCHAR(255), `price` DECIMAL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
INSERT INTO `plans` (`id`,`planName`,`features`,`price`,`createdAt`,`updatedAt`) VALUES (DEFAULT,"Standard Plan","{\"General\":true,\"Specialist\":false,\"Physiotherapy\":false}",0,NOW(),NOW());
INSERT INTO `plans` (`id`,`planName`,`features`,`price`,`createdAt`,`updatedAt`) VALUES (DEFAULT,"Premium Plan","{\"General\":true,\"Specialist\":true,\"Physiotherapy\":true}",388,NOW(),NOW());

