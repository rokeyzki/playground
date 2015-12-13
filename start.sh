#!/bin/sh
# @Author: Charles Lim
# @Date:   2015-12-13 13:19:04
# @Last Modified by:   Charles Lim
# @Last Modified time: 2015-12-13 13:19:17

source /etc/apache2/envvars
tail -F /var/log/apache2/* &
exec apache2 -D FOREGROUND
