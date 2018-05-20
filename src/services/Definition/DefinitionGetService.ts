import AppError from '@models/AppError';
import db from '@database/db';
// import DefinitionSelectDAO from '@daos/Definition/DefinitionSelectDAO';
import DefinitionGetParam from '@models/definition/DefinitionGetParam';
import DefinitionGetResult from '@models/definition/DefinitionGetResult';

export default class DefinitionGetService {
  public static async getDefinitions(param: DefinitionGetParam) {
    try {
      // const data = await DefinitionSelectDAO.selectDefinitions(param.values());
      // let _data = [];
      // data.map((d) => {
      //   if (_data[d.definition_id] === undefined) {
      //     _data[d.definition_id] = {
      //       definition_id: d.definition_id,
      //       definition_label: d.definition_label,
      //       term_id: d.term_id,
      //       term_label: d.term_label,
      //       pos: [],
      //       usage: [],
      //       created_at: d.created_at,
      //       updated_at: d.updated_at
      //     };
      //     if (d.pos_label !== null) {
      //       _data[d.definition_id]['pos'].push(d.pos_label);
      //     }
      //     if (d.usage_label !== null) {
      //       _data[d.definition_id]['usage'].push(d.usage_label);
      //     }
      //   } else {
      //     if ((d.pos_label !== null) && (_data[d.definition_id]['pos'].indexOf(d.pos_label) === -1)) {
      //       _data[d.definition_id]['pos'].push(d.pos_label);
      //     }
      //     if ((d.usage_label !== null) && (_data[d.definition_id]['usage'].indexOf(d.usage_label) === -1)) {
      //       _data[d.definition_id]['usage'].push(d.usage_label);
      //     }
      //   }
      // });
      // const result = new DefinitionGetResult(_data);
      // return result;
    } catch (err) {
      // todos
    }  
  }
};

// export async function getDefinitions(param: DefinitionGetParam): Promise<any> {
//   try {
//     const data = await DefinitionSelectDAO.selectDefinitions(1, 10);
    
//     const result = DefinitionGetResult.ofMany(data);
//     return result;
//   } catch (err) {
//     // todos
//   }
// }
// export async function getDefinitionByDefIds(param: GetDefinitionsParam)
//   : Promise<GetDefinitionsResult> {
    
//   let result = new GetDefinitionsResult();

//   let termIds = [];
//   let userIds = [];

//   const defSelected = await DefinitionSelectDAO.selectDefinitionsByIds(param.defIds);
  
//   await Promise.all(defSelected.map(async defObj => {
//     termIds = _appendIfNotPresent(termIds, defObj, 'term_id');
//     userIds = _appendIfNotPresent(userIds, defObj, 'user_id');

//     defObj.updated_at = defObj.updated_at.getTime();
//     defObj.poss = await PosSelectDAO.selectPosByDefinitionId(defObj.id);
//     defObj.usages = await UsageSelectDAO.selectUsageByDefinitionId(defObj.id);
//     defObj.origins = await OriginSelectDAO.selectOriginByDefinitionId(defObj.id);

//     result.definitions.push(defObj);
//   }));

//   const termSelected = await TermSelectDAO.selectTermByIds(termIds);
//   termSelected.map(term => {
//     term.updated_at = term.updated_at.getTime();
//     result.terms.push(term);
//   });

//   result.users = await UserSelectDAO.selectUserByIds(userIds);
//   return result;
// }

// export async function getRecentlyUpdatedDefinitionIds(param: GetDefinitionIdsParam) {
//   const definitionIds = await DefinitionSelectDAO.selectIdsOfRecentlyAdded(param.offset, 10);
//   await Promise.all(definitionIds.map(defObj => {
//     defObj.updated_at = defObj.updated_at.getTime();
//   }));
//   return definitionIds;
// }

// export async function getDefinitionIds(param: GetDefinitionIdsParam) {
//   const definitionIds = await DefinitionSelectDAO.selectIdsByIds(param.defIds);
//   await Promise.all(definitionIds.map(defObj => {
//     defObj.updated_at = defObj.updated_at.getTime();
//   }));
//   return definitionIds;
// }

// export async function getDefinitionIdsBySearch(req) {
//   const definitionIds = await DefinitionSelectDAO.selectIdsByTerm(req.query,0,10);
//   await Promise.all(definitionIds.map(defObj => {
//    defObj.updated_at = defObj.updated_at.getTime();
//   }));
//   return definitionIds;
// }

// function _appendIfNotPresent(arr, elem, key) {
//   if (arr.indexOf(elem[key]) == -1) {
//     arr.push(elem[key]);
//   }
//   return arr;
// }