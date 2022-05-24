import axios from 'axios';
import { isAsExpression } from 'typescript';
import { getPage, getPageDataByID, getLinkTypesWithAttribs} from '../v1Api';

const API_BASE =  process.env.REACT_APP_API_BASE + "/page";

const GENERICID = 4;

export async function getPageList(parent = 'root') {
    try {
        return (await axios.get(API_BASE + '/parent/' + parent)).data;
    } catch (error) {
        throw error
    }
}

export async function createPage(data) {
    try {
        return (await axios.post(API_BASE,data))
    } catch (error) {
        throw error
    }
}

export async function updatePage(page) {
    try {
        return (await axios.post(API_BASE + '/update',page));
    } catch (error) {
        throw error
    }
}

export async function publishPage(id) {
    try {
        if(!!!id) throw new Error('PAGE ID REQUIRED')
        return (await axios.post(API_BASE + '/published/' + id));
    } catch (error) {
        throw error;
    }
}

export async function createSection(data,id) {
    try {
        return (await axios.post(API_BASE+'/section/'+id,data))
    } catch (error) {
        throw error;
    }
}

export async function deleteSection(sectionId,attachments) {
    try {
        return Promise.all([
            axios.delete(API_BASE+'/section/'+sectionId),
            attachments.map(a=>{
                return axios.delete(API_BASE+'/data/'+a.linkID);
            })
        ])
    } catch (error) {
        throw error;
    }   
}

export async function addPageData(data){
    try{
        return (await axios.post(API_BASE+'/data', data))
    } catch (error) {
        console.error(error);
        throw new Error('Could not add Page Data');
    }
}

export async function updataPageData(id, data){
    try{
        return (await axios.put(API_BASE+"/data/"+id, data))
    }catch (error) {
        console.error(error);
        throw new Error('Could not update Page Data');
    }
}

export async function deletePageData(id) {
    try {
        return await axios.delete(API_BASE+'/data/'+id);
    } catch (error) {
        throw error;
    }
}

export async function getOrderedSections(pageID) {
    try {
        return (await axios.get(`${API_BASE}/${pageID}/sections/order`)).data
    } catch (error) {
        throw error;
    }
};

export async function setSectionOrder(pageID,order){
    try{
        return await axios.put(`${API_BASE}/${pageID}/sections/order`,order);
    } catch (error) {
        throw error;
    }
}

export async function setPageDataOrder(pageID,items) {
    try {
        return (await axios.put(`${API_BASE}/${pageID}/data/order`, items)).data;
    } catch (error) {
        throw error;
    }
}

export async function  getOrderedPageData(pageId) {
    try {
        return (await axios.get(`${API_BASE}/${pageId}/data/order`)).data;
    } catch (error) {
        
    }
}

export async function deletePage(pageId){
    try {
        return (await axios.delete(`${API_BASE}/delete/${pageId}`));
    } catch (error) {
        console.log(error);
        return error.message
    }
}

export async function createBreadcrumb(data, pageID) {
    try {
        return (await axios.post(`${API_BASE}/breadcrumb/${pageID}`,data));
    } catch (error) {
        console.log(error);
        return error.message
    }
}

export async function updateBreadcrumb(data, breadcrumbID) {
    try {
        return (await axios.put(`${API_BASE}/breadcrumb/${breadcrumbID}`,data));
    } catch (error) {
        console.log(error);
        return error.message
    }
}

export async function deleteBreadcrumb(data) {
    try {
        return (await axios.delete(`${API_BASE}/breadcrumb/${data}`));
    } catch (error) {
        return error.message;
    }
}

export {
    getPage,
    getPageDataByID,
    getLinkTypesWithAttribs
}