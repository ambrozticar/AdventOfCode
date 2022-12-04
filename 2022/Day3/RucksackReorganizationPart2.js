/*var inputArray = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
];*/

var inputArray = [
    "DMwrszrfMzSSCpLpfCCn",
    "RMvhZhQqlvhMvRtbvbcPclPlncddppLTdppd",
    "tVMQhFtjjWmsFJsmsW",
    "trRtvNhfJhSzzSTFVhQQZQhHGphP",
    "CnLMBWLwDMgMcwwdngdHGPVTQGpTHZdGPGpd",
    "LLDqcDgwqCMnLWqtvzrzbbtJqPjJ",
    "wQQwHNQLmbWQbQRHwHNFBbwqPfjqlzRMGRqzpSfvPlzplM",
    "nCtGCZZtsGsrtDMZpfMpSlMlvlZq",
    "cJctJCgVJsCJnDTsCthGhGLwBWBbbQmLbgQLQQdWbbbQ",
    "ZWnNlTNTnhhQQlDNdmmpwrrrqBwjwjZd",
    "GzvlVRSfvMVMvGlSpdCCdjmfpmBCdsqB",
    "bzlFlLzJWLHHttLL",
    "SmzFhVDzrmSrszVDVhSVbhZcCZdfZNcnMfMbZnNN",
    "PTTRGqwqTqWRwLgTLTZGnCbZbNddZCCtMcNs",
    "sgPqPqgJgWWqjjwgwLLVFBFSVmvmBBrmJJDSvp",
    "CBccfSBhcSBddfgtlJmmmwmPRwmh",
    "FpTzzGWHWprgDtJlDZDPFR",
    "HbbTzWnTrnWtCbQBbQqQbSjf",
    "fPHspCjgwZggSvZQ",
    "RrNhzFZFcNzFLNLNwQlSlLnv",
    "TRFrcDVrrRmrhFRZzVrczqhRpjqjsssCpfHjsCdpsPfpjCMC",
    "ZBnBTMVTSbGbTVTGbCPgqsgPtHtgCcPtBB",
    "ldDrmnnNrzhdhfgcsHqcsfCcsCHg",
    "zFdrzNdzQNDDhFdWldDrJTbZTbLZJVVVpMVWVnLS",
    "pLnpQNhBbnWvbsWm",
    "FrFwjlTPTdTqqrDZWbvmZbpSgmJWvbgS",
    "RqDqRrdGFpGRFrFFdTNzCcHcHLHBzQCcNNGN",
    "bvRCtbtCPfSGtCcvCbPNlglqgqlGZMzTgnlZnq",
    "hrmWWFspsHWrzNwTnFlTMTwFFn",
    "HpjJDWBQmmQdRffbPtSzdJ",
    "GpHjFsjMFpCpMWjMGCqWmmqrWQtmthdbDbbD",
    "fzgLTJwJPSgJgzSzPfhmqmQhQHzQtbQDrrmq",
    "RNlBRwHfRJHLLfHTwLSBppNGvjNMFFCVpVFcvcFC",
    "SfQnfSFHfnvMtQQSnHJtMffsdTlZtdZmtllmTlmlRRbBRLDb",
    "hrwhWWwqzPrcCzwwzmPlRbdmlQDTPPBLDl",
    "CpwCzrwGzNCWrJnMvpMvfJVFvQ",
    "rCRPpgSggcpqrhPrCDDTLsMLDSDGLTMGVs",
    "HdvzmRWmlHzwvWHvRHRvHJbDFsdMssQQVGMDTMDLVLLFLT",
    "JBlBnnWBJlCqZRRqRBpr",
    "GtZllZDlfDpGHZtZBGBZpDmzQzzCSVVFHmmmsPCQWWSS",
    "JvFJJrwvNNcJTnbrTRNRSCzqwSsVPCPQqmCQszVm",
    "JLMnTbLnMgBhDFDf",
    "lffDhtgDJzCJNGGTzWTRRnRvBv",
    "qpbpdwqZwqZSwMPSqdQcQmTRnWvnBnRBQBtVnTvWmB",
    "SccbbwSbZbFPswpSZtgFlClLhgChhhNfJlFj",
    "ClmCjCJBjwBVwJGjlGNFJlVMHSrfpDpTfrHMcHTppQVrHp",
    "dRLZWLvWSHmTccWW",
    "ggtqzmRZnmhghZhZghntdqsvBbjlbNFFBPwNNJNNCBlwPGBz",
    "HZmsFZQpvZsWCZQvWrghGrhtgNzdHddHGh",
    "fWSbqWDJVwcSccNzrNhcBtGcgG",
    "VqVfTJnbWjqTSqbwDRfRvQvFpFLRpZsssQsCQZ",
    "FpFZNfplSTJmbZzddGzhDrWh",
    "LqLPPQjLLRMPqvjLLHQrLqrRWdzHnGhdthttGGbbDWhDDdWz",
    "sMLMgvRLgscrLrRQvwmTNNfpNplglplfmp",
    "MPVBmCmWGWRPPqRhLcnjcvjjcpjMvp",
    "tzwrwsJlrldJsrsrTtrzrTtSNnLJSShnjcncvnvqnSFnqN",
    "rswrzsbdwDHHbWZqVfWV",
    "dVmmMTmBPTrCBRMCqFHSWFFHWzCvCz",
    "jNqfGsDqtsjGjQjDlcJFFFznFtzznvtFpFFp",
    "fNNhgsDcfNflqchVRdgVrRPRdVTRRb",
    "HJPLwgLvjttmgHJFjwHgtlsBbNbbNsPpblspTllThT",
    "MzmcRRrdDMVTzbhNNSszhl",
    "mCDDVqdVcdDrqfcCnrFwtGwvngwvtWJtFjWW",
    "dFDpmttBlvNNgWlglNDBFttmTGHTcSSJJHHnMsJsGGSdqcJj",
    "zLbwMLVQbQRwVsJsSHSsHcJqbj",
    "wfVZLPzfZZmpMZZMBl",
    "PZHZMJSTBWHNWSHzVnhhfnhThhpnpC",
    "jFdBBtrFjpfnjfnf",
    "ccGrbblbGRDQMlvmQBvmBl",
    "PCCTsnbPbHDnlDfDNB",
    "rMjQltgSqtvMjScQggjfVVzBzFHzGfVGDLGBqB",
    "vdtrMSttcdwcpSQSdglMrtWRRPJZCpsRZJmWRRWChWPh",
    "pWzbsPCCPPpbptSMCJJwBQQGQt",
    "cDDmcTTRRqzFRddVTSJwMShMtBwhwQMDwv",
    "HldqVmVlZdLTcmRFdrngNNzrffjWpPLggP",
    "JPqvjJmmqvSLmPtpZdcftdmtfdCC",
    "swwhDRwBBHjFFBtBfZ",
    "RRzNQDwznDsDwWJjLNlrSPLSTr",
    "VQmdRLvDlmqZdFrBBJdW",
    "CMstGsnHnHGGMrMZwMpwBSbW",
    "GnsshssNfjtsnggnHCGhjtmfLQQczllvDRVTTQllQWlQ",
    "dhbNbswbwVdNtVdstBtgbNQTBCCSFTmfmMFmfRqQmmQM",
    "HFljLrvZfMQQQPvm",
    "WrpznLZZrnplpWbgdFcFsNzszgst",
    "LjddfTlMccnBfDQBtBQb",
    "ZRSNchHwhNNCHNSWPQFFFHDBBtnQDH",
    "CNpZshSZgpwJmpdLMlplMc",
    "bTmTFmqzgbBntRVsFvVwcv",
    "CZfMrlZLLLMlfPZRLRHGstnjGwtvGcsSVwtcSGvn",
    "ClZpMLCRMZMrHMLmWpqQBpzpgQzmbg",
    "jDmSSGWDDdWdSqqDDqCqpJzqRRqpJnRsMRcMzM",
    "lPgNPvPrrgNrPhNszFggnRzccbMJgz",
    "ZQTHQvQTZPrrQlBBrNvQZZGtTtGdsVCGsCTLLGDmLsjt",
    "rbCfBrbsvQqRFZRNZC",
    "HLSTcwqwZSQFFgRZ",
    "wdDwjpMHqJDTMTdqjlfBvGBhsbfhbsnb",
    "ZhZcHHHlhgchHhlCZZhLCCbGdrsBBGPNBjGbsjNNjnJnPn",
    "wtJqqwDqQQMQFqSqTzwzVTBnGdsjBdnMdPGBBsBdnrjr",
    "RVzJzmSVZmLLWpCc",
    "gdqjQQrlhhQlQrhsnjjhLgmmvmHBBmTmZRsHJzTBHRJv",
    "NwNnGNbGPbmTGpJzppBG",
    "nDnVDfMDrQqQStgM",
    "MLbgbppMMgLmHgQttGQJgJrBShwNShWBBSNNrwNqNN",
    "GnTFlzCVVwPRrVWhSw",
    "GnDDdvdnZDTdnGMsHbbttZgttLbc",
    "mdmPmjClrTzqttfm",
    "cpFnSbcQQsqNNtqWJzHS",
    "QFpcMMBcZtLpQBjVjZhlPjjVlwvw",
    "spVsPjTZZMpZMVLDjmdSQJCLJSmLzdJQdl",
    "HhRnNrqwMhNhnqnHwGNRFBNBrzSCSdQmQCdddbrQSSclSSbQ",
    "nFNqGRvqBfjMvTssfZ",
    "FjjzjnpFqqzFFqgFSZjBhHfHhnHRDDwfdTdLfD",
    "MmCMGCsMWbtJrtCWCbmsmWWhdLGGwRBwdfdLhdTLhHHTBd",
    "bJmtrRvRjgzFFvVq",
    "RWwWmVQGMFGmMGVCVWRRZSBgDdSdJGlSJpcBGGSlpJ",
    "HHhQThnjBDHfSBlS",
    "bPhNjbsssQzFNQqWmz",
    "FTDtrjqwwqGtDbGnfBlcnLcWBZwlWn",
    "mMhRMvJsJvJnMHCvHmhLZLQlhWQBBfPfLPBZ",
    "HRCCsdNdvNmCvggFStbzjbGSSjjn",
    "sLGddsvvcZmLvrLMGcMsVnTTlqlHCsTHHVVgVt",
    "wRbfJPbpNRffRJMBhpDntTCHFNVgqllFlqggHC",
    "DpfbPhRDJPMJppJwzfpbbDGSjrGZvdccQdjGvQZdvrLz",
    "wTwLNLVTqnLMsBwfMsJmCj",
    "JhlGvcdJhSFvFvvvMfgBpCzjzdCfsMMs",
    "DSlPPJSGWrDcFPhtFhWJZHQZLTQVnRWRbHbZHQQT",
    "TmTgTrPDNLNVlDrmlbgNmrSSGbzjZGMvjpZjvvphWMzW",
    "QtBfdfQcdfHtZcnZnGZzchnp",
    "HQHwRBGfBCGBtsrCNPDTmTlNLr",
    "bfNhjhNJDWhlWhlRRR",
    "SsscnHgnSnZnltqqfWRWrzZv",
    "cnfTMfmMnTnmFGsnTVLLLpQJbpbbjpdTdN",
    "BqwZzqRQQRRPSlFRQDDwdfWwhJphnfgfnpMdJfdM",
    "rcTLrcrvDDChWJhfpTgTJh",
    "DHGbGNVCZStGqSqS",
    "dlfdRNNfVdLwrRnwdwRmhLFsbsJJgLqbgCBWBCsW",
    "PHDppMPMHHDPzmBBCmWJqCmbJD",
    "HzzZHmZzQcNdRRdZwddr",
    "wrlshslPsSRfvrQvwbrslCDghtDgCVhDhBVJCFHddt",
    "mZnGpWpWzGTMqnFqDqJNDNFJVJqH",
    "LjpzGcjMGcTzcmmznWSRsfRPfcrbFQcfrwcv",
    "rWBmmmtNmmtBbtlwnhJJVZbw",
    "FsRcjGdLdvFslZbQJZwQps",
    "GHFGvMccFPjgDNbmWWBTTHNz",
    "GhHzmhmwlpbltGBmBmsZsBZsfCWC",
    "rgrcCCPdsWBgNVBD",
    "RnRMdQPMCqndSdQdcQhblpLLwhJbbpzGzwpS",
    "NNQtStFPpJwhRbRzRbqpZZ",
    "jLnmdJrrdDTdbgWbTbRW",
    "JHvnMCmDnMnMljLCDmMLjHNFGGNBPVtQQFtSNFQtPQBv",
    "BFbBRllFZJnPVJbV",
    "GpGHwgzcLhDcwttwthzzhHcPTjZjMgMVZjgZTMmTnMZWJVJm",
    "GccwhqcDtlrPqQrRNQ",
    "gWHWLgHBHQdFhjGGThTQhR",
    "pZsSMpZMJJSzMszzzqclpfjvrvvcRGGTcTVhbVvRbTGTRG",
    "lnMwsqZqsslpjlSMSsffZqqJBgHNNPNDWdLLgdDgdLHPWwCw",
    "qfNvBCBfBqfNMBqCZZfcnmnvtwScpwFSpSsSwt",
    "HzdVzLWPPGGDdnsswnztsRsnmn",
    "QddWVQgJPPHJTJbjBtNTTq",
    "DdRDDPRGGPGccfcbJwsbJWzsnznlLLWzWTLWhVVVVS",
    "CvCrNCqgFqvmqNZFZqqZvpWlVrlVhlhnTLShlDWnzVBD",
    "jvqpvpvpQNCQQCZZmmNgZfdGddRjJDPRMHcHJDHPJf",
    "ttdtBtPPMqWMdgPPBbVGWfTGTTzSVLfVrzCS",
    "ZpDpvRpZDDcmmjmZfLSrwzRnSVSnwTTR",
    "ZvQmjFVHJFDcQjDlZcDVHdqMNtqNBPtPJtbhhbdbts",
    "dGdwwLLpgwgssJpgssNhpJlnbfjnzFfcbfttGjzjlntf",
    "VQvDvHVVQHrQHDCZVBChrHFtzffnfltFFtncnvFtllMl",
    "VBShSqDVRVSTmppPwwsP",
    "fTFDTLNNzlcNrmDcrMDTFPwCSsbCbPPsnCPwLSPvbs",
    "ttQqhJtBRRGnvgHGnlSnbl",
    "hZBJlQBRjVRBRjhtRRMNFVmFmfDNrfWcFVmD",
    "mcTZFBFmqBjmBgPtCtPprmssStCP",
    "LWDQNqDJfQNJddnWfzhfsPRVppVVsSptftpVMS",
    "NDGnJDDDbzddWdNbGNQQLQbqqFBBFcjlZBlHjlZHGBTvZB",
    "PwDzvphPwVwWBqLLwnJWTq",
    "jdCGCgjmllCrmmlmjrbgmRdgJSSJJFLSSqJfLnqLLLbWffLB",
    "mRdjcMHgDpZhDqMZ",
    "cqLjhhrwZwJbBqZhMwbZZdGWdGSllWFvLFGQdnGFQG",
    "gHHVzzppRVggcgpcGWRQRSvdSvvGWvll",
    "HmNNHtVggHsHPtrhJsbjbwCrCqJc",
    "zqPvzLVvzFFQZzWpRLlmHRDHmRCHDH",
    "dNjnJGGrGdqqMprRlpqB",
    "GsgtjhSsSvvSFqvP",
    "pVrfzzjrjWVWTWjrNZvnJSJZqnnqnpSZZS",
    "bdQVQPRPDdcbRGPFddRVMVlZlMlBqSBBZSvSZwnwvJBS",
    "bFbcFbCPPCbbVHCCdVgWfrzjmWfrWrNWgHfT",
    "JgJqLjjjVGgdqGDZGzlGRStStT",
    "PHrHccmrMrTSMVStRtRR",
    "HWPWffNsrppfPWNsVFsmPNCJwwjdJdvdvnJwghBLJLpdLJ",
    "HtHvcnDSDgDcDHtpLrvwjwjfZMjffw",
    "CPWzdJdqVdWZpnLdwnrfdn",
    "GNCNmTQnPVRRglSlHsSG",
    "FJdhjTPbdPJjTPjTjPtSLsSBWWRcCvCvsBWztc",
    "MfGgrHMDDpMnZGDLCRLScCsBlgWvzB",
    "HnmpmNNHGZZpZZrnMPFFbNCNbFdTPVFFFN",
    "TJrrrJQTqJqmTltfRrgfgtgFFg",
    "jLRzBvBjjcnFBNwWlgBZFt",
    "RMjMCGpGzGznzhRmmPPDPsmMmPQmJs",
    "BZqwQCQZGZcVBczqBHtfbbbWfTqNWfMfPNqW",
    "LLpmFjpvpHrvRFSRDRMWbdbtfPWPbjtMgMtW",
    "SDnrpDprDFnQhZCVnhcH",
    "WTsBBQTfQQTTbJBbZbnfTsRFwFrjwjFlrRqvrrlqvWRV",
    "pGcShcGSLNJNHCLttlpllRFgpRFlRpgRrg",
    "GzcMLScSGJGtCbsbQfbZbMBnBn",
    "NGCLGjVjZjQwTGJRQdWM",
    "cFTcvSrFmnnpSmndMswsRMJWRwMHps",
    "rrrhhcTznqvzmcccvvmhgzqDgbgttlDtjjjlfVCfZCjZZV",
    "ccDMHddWNDnnNWMMzdHJJmSQhfQZfvQZflrZQfdVfLLZ",
    "bgBFRTwFtgqCgpRGFpvpVllZlhjrrlVlvj",
    "wtbBGPTPtRTgbCTBqFgGRwFnsWJnmDMsWMJJMzHPhDmJzP",
    "zsbsMtMMdnffBbzNsBtCCWLpLrCrcNLVDWVVcD",
    "TmPhJRvwmjmhFJwjjRPFPTvJGVCcCGBrDpccpDrCrWCVDVFZ",
    "QvSTvBhqwjPmwddHgtqMnllzMl",
    "gftDtqnpqzGZsFcthbtZ",
    "VlNPrBrRNrLBmdRVFCcGCZTFCsTCsbLL",
    "VdldlljlSNHBsSlqfgqMDDvzpHJHWg",
    "tQDLvFLcDrWrcnsHffCGgGHG",
    "ZRPTPJqhMZJZVllRZJPVZPRHnhCnfdssnCznzGhdgfwCHn",
    "qPqlPVlTlSqbZZVJplqlPDmrjWFtmLtFWgQvtmtFvp",
    "zlZzdNRPgGGzsLGCDBBtCDCtSncScP",
    "vWvHWbqjrFMbvrTWcVnQBBBSjLDcQJcL",
    "wfLHwfFqLFbhHvWhMWqwbwwRspssmzgpzGgmmNfmzmRGRz",
    "rPvLrQBvBLsLLdtrgssgZjwFwlnCFMtMFnlllnnb",
    "mNmmzpWHlzjlJMJb",
    "TVSVTWpqRWpSTqNbTVRBPDfLLPrSLrsfQrrvsf",
    "nRjpQWnQnRQzMjRdrtvvPCfmvGtPfMcCtG",
    "TDbrbhNZVbbbbwhDZDhbTTGfcftqcGVvmmcqcJCcCPmJ",
    "NLhrSwgwgnsLsQWljW",
    "JWqVSpGNPdNNzdZJJpMzHzwLgsMwzwQwMBgL",
    "clrlcvrRfccCtFbHrBWLgwLHmMHsHg",
    "DbfDFjcvRcvchWZVWdNpGZNqdh",
    "sdfvFLfmtszQwLfddRpmtDDBjVNWGMNQVQNMJGWJMj",
    "lccrncTZhqqcqhWggvrjMNMGrJMG",
    "SblShnZCqSbPhhbcbTTSZFdFsFpmdRwPwzvmswLtmm",
    "PGwwHpfnFSvVpWqWCQNNjCbbnW",
    "lmddlhcDRBlLRchdmzbNjqqWTcbNPNWTzz",
    "RBMrRdRhlDtPrJtfwFHpsvrHpFSrFw",
    "hhwlglFFSQndLRFbmCbTTz",
    "NczHMMqzpzPcpfBffcmTrdfGbbRbGrdGrLCL",
    "qNzNPqMjcqNBWWccBHsZPDhJnllwnwvJvQnJhQsgvD",
    "mbmvmvbbprZmlFmZbFgLffgQtFNHNhfqQtNQ",
    "SJcdzjSJBzdBdJDzQhhLQfqzNQQHggRL",
    "jwDwcTTDThvTZPPW",
    "FSVBBBvHvCpVVDDGcGwNNhhctwMvMc",
    "fLLZsZVQmjfTfqQRmQhhtgbbJbGJRghtcGct",
    "qTsTQdqjVfqdVdZZqVLpCpzSpdppBlSpCFdHSC",
    "sQQhWsMmQshlhmMQZFDHDJFjgjzHZgcHdH",
    "LnwnpNRrnrbCqqLpwnqfnLcvFHJFzNcHzJcgJJHgdDgN",
    "wCbnpCfPCVqwwnrrbbPRGMMlSllmlTTmsThVMlsd",
    "pzrprfwgbwtwqzrCWbqCwqSMvddHdDSvtHRlDnRRDddD",
    "zQLzQQjPBPFcLcQFTFsmNQzcMNdDdvnldHHvdvnDnRnlvRnJ",
    "cTZGzzscLcPrqrfrZqqbVV",
    "DcSdcTwDLmcwDwvWssGfJfcJQZPGnfcs",
    "FlHFMgtgNggpsztMHMqpjgBBnCfPflfQnZCQBBCnRPZC",
    "gpVjqNVrHFtjqqzSLDTSmTDwwrmhbs",
    "MLMzJTsZzZMgMLgHMmVmdCVhCBlQwDwwhChD",
    "vtPRQpbqCldwdtBC",
    "bQqFbnQbcFfjPRFPQnTrMMgcJgJrssrzgrgS",
    "mtdGJmQRFmdtQvdvtRtdHzHzqZqpHFzZnCzhZjjH",
    "fPwVlllswMVNPfBDDlNVsMsfcBjchHncqzjZbpzjcqCnpHHn",
    "rlsNPWNlhWTPMMNPfwNWTLQRvQLLmgvSJvRJgTRG",
    "TwnqhqqgvQnGBGmBDp",
    "SMjclJSjjVJgCzCzNgpmdBpmBGspRBmpDDVB",
    "JjMCgMMHMMZNStllZSNHhPqFhFWfqPPqTqhLFqtL",
    "lRQPtjPRlDdStDSlPmvllvLsCphFfCHLHggspgFmsFLH",
    "qwpTNprcbNWVHLrfFssBgFCM",
    "NTWTnzTTWGZZZVRSRRQGpdDtSQRp",
    "gpwTPNPBPTdLLLLVGl",
    "jSHdjzZHMcDVtDvFjtCF",
    "HqfZMHzbcqRRRWgdqPmBBBNmwW",
    "PvSBtdFgvSmBPngFBTBjbSjwwpGjsppMjNpMjj",
    "VZLfVQLzQQQhllpcNcwbssvwwwZj",
    "vHWLVVqWTmTgttgq",
    "CNRmNRFNRCWbWNCrlmfGlWqFLsDZQZBZzgwQZsBsDZZCzczB",
    "MSjdVHvHnDDhHvdwBwssZVzwcgLcQg",
    "HnMMTdttHSHSpHvDddpSHTjWlNWFlmRtRmRbqGfqGGNNfR",
    "fBLTDppznrfTndfnfTzTLPvZvvHVbRbggjvzVbzvbV",
    "mwmDGGlqDhMqthGqhJMWmlNVRZPHjgwjjRZbbHRgRHvv",
    "DmhsJsshWGhSGlmlmrdcLLsTBBfcfnBppc",
    "mbCGFFmGmcdTrCTQdh",
    "MJHfJNLllJffPLRTdBqTRQNcqQGB",
    "fPJHfSSSWfSLDMLWGHDMLDFmznmsjmvZwzvjZjbvbZ",
    "pPvpJSfZTTvCzNZczzQZchcj",
    "svbHWsqsvbsMFtVHgVtcRQcDlQRRRQLjlqjczj",
    "tBsgvHVMFggbgFrgWnwSndfBmmBJfPSfpn",
    "jwbwfjSbwjVSjvZPzWSvhvhQlCsBFgLRLLgBLRClLLFQQw",
    "GdNJHpmHTDnTNJqnFCgBLFLFzFtsQRCd",
    "NpMJHpnMrDpJGTHqTTmJHTPjfcvbWfrffVzvZfVWSbjz",
    "wFwpqWwwpqwtqqrbCFtptDmCcfNhNRzRBZRRJRChVNBZBJ",
    "svlvjHsQlvdlvMLdlvPSSLtzzczcNhJthfNtRcNMJNMc",
    "HvvPLSHjgltjsvqwbbnmWmDpgwTT",
    "zhCmPVwwChdCBtsWnNWswBWr",
    "GJJSfSgFpjJjGgpfpgrcNNstvnBHNnHLtFHr",
    "jgDTfjpMgZMGMGJTMMJRhzZPCzbhVlPqdNCbhd",
    "bDbQQmVDRpDNbRQlfQQZnfwTlllfsT",
    "FChzzBWhVzrgMwffJwlnngnTlJ",
    "MCvqvhFzcHCChjtpNNVLppGmbq",
    "bZZzJnccqdzcLhrcQDLrDs",
    "FfCfWVfjWTFClClfwjWCfGGwhZSDhSLsSSRpZprLph",
    "mFmTMmFjMMWFfZtttflWjmWTngNHJHggJJHtzgnJvBtBgHdv"
]

var score = 0;

var resultChars = [];
var resultValues = [];

for (var i = 0; i < inputArray.length; i += 3) {
    var first = inputArray[i]
    var second = inputArray[i + 1]
    var third = inputArray[i + 2];

    var done = false;

    for (var j = 0; j < first.length; j++) {
        if (resultChars.length > i / 3) {
            break;
        }
        for (var k = 0; k < second.length; k++) {
            if (resultChars.length > i / 3) {
                break;
            }
            for (var l = 0; l < third.length; l++) {
                if (resultChars.length > i / 3) {
                    break;
                }
                if (first[j] == second[k] && first[j] == third[l]) {
                    //console.log(first[j]);
                    if (first[j] == first[j].toUpperCase()) {
                        var value = first[j].charCodeAt(0);
                        value -= 38;
                        score += value;
                        resultChars.push(first[j]);
                        resultValues.push(value);

                        //console.log(value);
                    } else if (first[j] == first[j].toLowerCase()) {
                        var value = first[j].charCodeAt(0);
                        value -= 96;
                        score += value;
                        //console.log(value);
                        resultChars.push(first[j]);
                        resultValues.push(value);
                    }
                }
            }

        }
    }
}
console.log(resultChars);
console.log(resultValues);
console.log(score);