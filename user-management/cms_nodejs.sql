-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 08, 2019 at 03:24 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_divisi`
--

CREATE TABLE `db_divisi` (
  `id` int(11) NOT NULL,
  `nama` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `db_divisi`
--

INSERT INTO `db_divisi` (`id`, `nama`) VALUES
(1, 'Marketing'),
(2, 'Developer'),
(3, 'Sales'),
(4, 'HR');

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` int(11) NOT NULL,
  `nama` varchar(256) NOT NULL,
  `jabatan` varchar(128) NOT NULL,
  `divisi` varchar(128) NOT NULL,
  `userid` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `alamat` text NOT NULL,
  `tanggal` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `nama`, `jabatan`, `divisi`, `userid`, `password`, `alamat`, `tanggal`) VALUES
(14, 'M. Fajrul aslim', 'Project Manager', 'Developer', '6VcKq2exWXg0yIW', '$2b$10$4BrH7c9fRjifnsGZwdxoTehoMLpkuspYNusanxnB0e/FWFE.vrbPS', 'Puri Permai Tigaraksa Tangerang', '1575771781119');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_divisi`
--
ALTER TABLE `db_divisi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_divisi`
--
ALTER TABLE `db_divisi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
