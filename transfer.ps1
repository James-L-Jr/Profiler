# Copy all contents from browser to docs
Copy-Item -Path "docs\browser\*" -Destination "docs" -Recurse -Force

# Copy index.html to 404.html
Copy-Item -Path "docs\index.html" -Destination "docs\404.html" -Force

# Remove the browser directory
Remove-Item -Path "docs\browser" -Recurse -Force

Write-Host "Files copied and 404.html created successfully!" -ForegroundColor Green