const {Transaction} = require("../models");
const {asyncWrapper} = require('../utils/async');
const {StatusCodes} = require("http-status-codes");
const { Op } = require("sequelize");

/**
 * 최신 20건의 트랜잭션 전체 조회
 *
 * @req : page(number), txId, txHash
 */
const searchTx = asyncWrapper(async (req) => {
    try {
        const {page, txId, txHash} = req.query; // 요청 페이지 넘버, 트랜잭션 ID, hash
        console.log("hash 값: " + txHash);
        let offset = 0;
    
        if (page > 1) {
            offset = 20 * (page - 1);
        }

        let txData;
        if (txId) {
            txData = await Transaction.findAll({
                where: {
                    [Op.txId]: "%" + txId + "%",
                },
                order: [
                    ["id", "DESC"]
                ]
            });
        } else if (txHash) {
            txData = await Transaction.findOne({
                where: {
                    transaction_hash: {
                        [Op.like]: "%" + txHash + "%",
                    },
                },
                order: [
                    ["id", "DESC"]
                ]
            });
        }
        else {
            txData = await Transaction.findAll({
                offset: offset,
                limit: 20,
                order: [
                    ["id", "DESC"]
                ]
            });
        }

        console.log(txData);

        return {
            status: txData.length > 0
                ? StatusCodes.OK
                : StatusCodes.NO_CONTENT,
            message: '성공',
            data: txData
        };
    } catch (e) {
        console.log(e)
        return {status: StatusCodes.BAD_REQUEST, message: '실패', data: {}};
    }
});

/**
 * 트랜잭션 상세 조회
 *
 * @req : txId
 */
const getTxById = asyncWrapper(async (req) => {
    try {
        console.log(req);
        const {txId} = req.params;
        if (txId === undefined) {
            return {status: StatusCodes.BAD_REQUEST, message: '유효하지 않은 파라미터 값', data: {}};
        }

        let trasData = await Transaction.findAll({
            where: {
                transaction_id: txId
            },
            order: [
                ["id", "DESC"]
            ]
        });
        return {status: StatusCodes.OK, message: '성공', data: trasData};
    } catch (e) {
        console.log(e)
        return {status: StatusCodes.BAD_REQUEST, message: '실패', data: {}};
    }
});

module.exports = {
    searchTx,
    getTxById
};