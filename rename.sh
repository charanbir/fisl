find . -type f -name "product*" -print0 | while read -r -d '' file; do
    mv "$file" "${file//product/country}"
done
