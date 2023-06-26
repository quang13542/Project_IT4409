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
) ENGINE=InnoDB AUTO_INCREMENT=1036 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'quang30','Quang301','quang300102@gmail.com'),(2,'root','Quang301','quang300102@gmail.com'),(1001,'NguyenVanAnh','1','nguyenvananh@gmail.com'),(1002,'TranThiBui','2','tranthibui@gmail.com'),(1003,'LeQuangChung','3','lequangchung@gmail.com'),(1004,'PhamThiDung','4','phamthidung@gmail.com'),(1005,'HoangVanDong','5','hoangvandong@gmail.com'),(1006,'NguyenThiNgan','6','nguyenthingan@gmail.com'),(1007,'TranVanGiang','7','tranvangiang@gmail.com'),(1008,'LeThiHuong','8','lethihuong@gmail.com'),(1009,'PhamVanDung','9','phamvandung@gmail.com'),(1010,'HoangThiNgan','10','hoangthingan@gmail.com'),(1011,'NguyenVanKien','K','nguyenvankien@gmail.com'),(1012,'TranThiLien','L','tranthilien@gmail.com'),(1013,'LeQuangManh','M','lequangmanh@gmail.com'),(1014,'PhamThiNgoc','N','phamthingoc@gmail.com'),(1015,'HoangVanThai','T','hoangvanthai@gmail.com'),(1016,'NguyenThiPhuong','P','nguyenthiphuong@gmail.com'),(1017,'TranVanQuang','Q','tranvanquang@gmail.com'),(1018,'LeThiThu','T','lethithu@gmail.com'),(1019,'PhamVanSang','S','phamvansang@gmail.com'),(1020,'HoangThiThao','T','hoangthithao@gmail.com'),(1021,'test','testtest','test@gmail.com'),(1022,'test','testtest','test@gmail.com'),(1023,'test','testtest','test@gmail.com'),(1024,'test','testtest','test@gmail.com'),(1025,'test','testtest','test@gmail.com'),(1026,'test','testtest','test@gmail.com'),(1027,'test','testtest','test@gmail.com'),(1028,'test','testtest','test@gmail.com'),(1029,'test','testtest','test@gmail.com'),(1030,'test','testtest','test@gmail.com'),(1031,'test','testtest','test@gmail.com'),(1032,'test','testtest','test@gmail.com'),(1033,'test','testtest','test@gmail.com'),(1034,'test','testtest','test@gmail.com'),(1035,'test_ver1','testtest','test_ver1@gmail.com');
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

-- Dump completed on 2023-06-26 10:23:15
