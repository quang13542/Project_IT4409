-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: travelling
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1051 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1001,'Nguyễn Văn An','12345678','nguyenvanan@gmail.com'),(1002,'Trần Thị Bình','abcdefgh','tranthibinh@gmail.com'),(1003,'Lê Hoàng Cường','qwertyui','lehoangcuong@gmail.com'),(1004,'Phạm Thị Dung','zxcvbnmn','phamthidung@gmail.com'),(1005,'Hoàng Văn Dương','poiuytre','hoangvanduong@gmail.com'),(1006,'Lương Thị Hà','lkjhgfds','luongthiha@gmail.com'),(1007,'Nguyễn Văn Hiển','mnbvcxza','nguyenvanhien@gmail.com'),(1008,'Đỗ Thị Hoa','09876543','dothihoa@gmail.com'),(1009,'Trần Văn Hùng','76543210','tranvanhung@gmail.com'),(1010,'Nguyễn Thị Hường','10293847','nguyenthihuong@gmail.com'),(1011,'Trương Văn Huy','qwertyui','truongvanhuy@gmail.com'),(1012,'Bùi Thị Kiều','abcdefgh','buithikieu@gmail.com'),(1013,'Lê Văn Lâm','zxcvbnmn','levanlam@gmail.com'),(1014,'Nguyễn Thị Loan','poiuytre','nguyenthiloan@gmail.com'),(1015,'Vũ Thị Ly','lkjhgfds','vuthily@gmail.com'),(1016,'Trần Văn Minh','mnbvcxza','tranvanminh@gmail.com'),(1017,'Phạm Thị Mỹ','12345678','phamthimy@gmail.com'),(1018,'Lê Văn Nam','qwertyui','levannam@gmail.com'),(1019,'Trần Thị Ngân','zxcvbnmn','tranthingan@gmail.com'),(1020,'Phạm Văn Nghĩa','poiuytre','phamvannghia@gmail.com'),(1021,'Đinh Thị Nhung','lkjhgfds','dinhthinghung@gmail.com'),(1022,'Lê Văn Phong','mnbvcxza','levanphong@gmail.com'),(1023,'Trần Thị Phương','09876543','tranthiphuong@gmail.com'),(1024,'Phạm Văn Quân','76543210','phamvanquan@gmail.com'),(1025,'Lê Thị Quỳnh','10293847','lethiquynh@gmail.com'),(1026,'Nguyễn Thị Sương','qwertyui','nguyenthisuong@gmail.com'),(1027,'Vũ Văn Tài','abcdefgh','vuvantai@gmail.com'),(1028,'Lý Thị Thu','zxcvbnmn','lythithu@gmail.com'),(1029,'Hoàng Văn Thắng','poiuytre','hoangvanthang@gmail.com'),(1030,'Trần Thị Thảo','lkjhgfds','tranthithao@gmail.com'),(1031,'Nguyễn Văn Thiên','mnbvcxza','nguyenvanthien@gmail.com'),(1032,'Phạm Thị Trang','12345678','phamthitrang@gmail.com'),(1033,'Lê Văn Trung','qwertyui','levantrung@gmail.com'),(1034,'Trần Thị Tuyết','zxcvbnmn','tranthituyet@gmail.com'),(1035,'Nguyễn Văn Tùng','poiuytre','nguyenvantung@gmail.com'),(1036,'Lương Thị Uyên','lkjhgfds','luongthiuyen@gmail.com'),(1037,'Nguyễn Văn Việt','mnbvcxza','nguyenvanviet@gmail.com'),(1038,'Đỗ Thị Xuân','09876543','dothixuan@gmail.com'),(1039,'Trần Văn Yên','76543210','tranvanyen@gmail.com'),(1040,'Nguyễn Thị Yến','10293847','nguyenthiyen@gmail.com'),(1041,'Trần Văn Đạt','qwertyui','tranvandat@gmail.com'),(1042,'Phạm Thị Điệp','abcdefgh','phamthidiep@gmail.com'),(1043,'Lê Văn Đông','zxcvbnmn','levandong@gmail.com'),(1044,'Nguyễn Thị Giang','poiuytre','nguyenthigiang@gmail.com'),(1045,'Vũ Văn Hải','lkjhgfds','vuvanhai@gmail.com'),(1046,'Lý Thị Hoài','mnbvcxza','lythihoai@gmail.com'),(1047,'Hoàng Văn Hùng','12345678','hoangvanhung@gmail.com'),(1048,'Trần Thị Hương','qwertyui','tranthihuong@gmail.com'),(1049,'Nguyễn Văn Long','zxcvbnmn','nguyenvanlong@gmail.com'),(1050,'Phạm Thị Mai','poiuytre','phamthimai@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-03  8:52:47
