echo "copyng files..."
cp ../template/.gitignore .gitignore
cp ../template/index.html index.html
cp ../template/README.md README.md
cp ../template/style.css style.css

echo "removing files..."
rm README-template.md

echo "TODO: updating main README.md..."

echo "initialize successfully!"