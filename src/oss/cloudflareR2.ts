import { genDateDirName } from "../utils";
import { OSSProvider } from "./interface";

class CloudflareR2 implements OSSProvider {
    async uploadImage(data: any, fileName: string, fileType: string) {
        const filePath = `${genDateDirName()}/${fileName}.${fileType}`;
        await self.R2_IMG_MOM.put(filePath, data);
        return filePath;
    }

    async uploadSticker(data: any, fileName: string, fileType: string) {
        const filePath = `stickers/${genDateDirName()}/${fileName}.${fileType}`;
        await self.R2_IMG_MOM.put(filePath, data);
        return filePath;
    }

    async uploadFile(data: any, fileName: string, fileType: string) {
        const filePath = `files/${genDateDirName()}/${fileName}.${fileType}`;
        await self.R2_IMG_MOM.put(filePath, data);
        return filePath;
    }

    getURL(filePath: string) {
        if (self.R2_CUSTOM_DOMAIN) {
            return `https://${self.R2_CUSTOM_DOMAIN}/${filePath}`;
        }

        return filePath;
    }
}

export default CloudflareR2;

