yarn run build
ssh pepiniere@10.177.106.10 "rm -rf /home/pepiniere/p5chi_auf/vesta-ui/*"
rsync -r dist/* pepiniere@10.177.106.10:p5chi_auf/vesta-ui/
