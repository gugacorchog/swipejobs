import axios from "axios";
import { AppConfig } from '../config/AppConfig';

// class containing main services for the app
export class JobService {
    static async getJobList() {
        try {
            if (!AppConfig.workerId) {
                console.error('worker id not provided');
                return null;
            }
            const res = await axios.get(`${AppConfig.apiUrl}/worker/${AppConfig.workerId}/matches`);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    static async getWorkerProfile() {
        try {
            if (!AppConfig.workerId) {
                console.error('worker id not provided');
                return null;
            }
            const res = await axios.get(`${AppConfig.apiUrl}/worker/${AppConfig.workerId}/profile`);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    static async getAcceptList(jobId) {
        try {
            if (!AppConfig.workerId) {
                console.error('worker id not provided');
                return null;
            }
            const res = await axios.get(`${AppConfig.apiUrl}/worker/${AppConfig.workerId}/job/${jobId}/accept`);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    static async getRejectList(jobId) {
        try {
            if (!AppConfig.workerId) {
                console.error('worker id not provided');
                return null;
            }
            const res = await axios.get(`${AppConfig.apiUrl}/worker/${AppConfig.workerId}/job/${jobId}/reject`);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}