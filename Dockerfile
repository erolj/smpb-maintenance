FROM nginx:alpine

# Copy the HTML file to the Nginx html directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 8880

# Set proper permissions
RUN chmod 644 /usr/share/nginx/html/index.html

# Use a custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]