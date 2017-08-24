CREATE TABLE `users` (
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `email` VARCHAR(320) NOT NULL DEFAULT '',
  `shared_key` varchar(255) NOT NULL DEFAULT '',
  `wallet_data` longtext,
  `created_at` varchar(128),
  `last_update` varchar(128),
  `created_ip_address` varchar(128),
  `last_ip_address` varchar(128),
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `user_settings` (
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `email` VARCHAR(320) NOT NULL DEFAULT '',
  `setting` longtext,
  `value` longtext,
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `user_authkeys` (
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `auth_key` VARCHAR(320) NOT NULL DEFAULT '',
  `expires` longtext,
  `user_agent` longtext,
  PRIMARY KEY (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;