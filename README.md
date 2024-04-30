## How to Deploy to s3

1. run "npm run build", it will got folder "build"
2. create bucket in s3 and setting as hosting mode and set public mode
3. set bucket policy as 

    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::"bucket_name"/*"
        }
    ]
    }


4. copy file from folder "build" to place in bucket

### for documentation, follow this link https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html
